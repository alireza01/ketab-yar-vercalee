"use client"

import * as React from "react"
import { Search as SearchIcon } from "lucide-react"
import { useRouter } from "next/navigation"

import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command"
import { Button } from "@/components/ui/button"

export function Search() {
  const router = useRouter()
  const [open, setOpen] = React.useState(false)

  React.useEffect(() => {
    const down = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault()
        setOpen((open) => !open)
      }
    }
    document.addEventListener("keydown", down)
    return () => document.removeEventListener("keydown", down)
  }, [])

  const runCommand = React.useCallback((command: () => unknown) => {
    setOpen(false)
    command()
  }, [])

  return (
    <>
      <Button
        variant="outline"
        className="relative h-9 w-full justify-start text-sm text-muted-foreground sm:pr-12 md:w-40 lg:w-64"
        onClick={() => setOpen(true)}
        data-search-trigger
      >
        <SearchIcon className="ml-2 h-4 w-4" />
        جستجو...
        <kbd className="pointer-events-none absolute right-1.5 top-2 hidden h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium opacity-100 sm:flex">
          <span className="text-xs">⌘</span>K
        </kbd>
      </Button>
      <CommandDialog open={open} onOpenChange={setOpen}>
        <CommandInput placeholder="جستجو در کتاب‌ها و مطالب..." />
        <CommandList>
          <CommandEmpty>نتیجه‌ای یافت نشد.</CommandEmpty>
          <CommandGroup heading="پیشنهادها">
            <CommandItem
              onSelect={() => runCommand(() => router.push("/books/popular"))}
            >
              <SearchIcon className="ml-2 h-4 w-4" />
              کتاب‌های محبوب
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/books/new"))}
            >
              <SearchIcon className="ml-2 h-4 w-4" />
              کتاب‌های جدید
            </CommandItem>
            <CommandItem
              onSelect={() => runCommand(() => router.push("/categories"))}
            >
              <SearchIcon className="ml-2 h-4 w-4" />
              دسته‌بندی‌ها
            </CommandItem>
          </CommandGroup>
        </CommandList>
      </CommandDialog>
    </>
  )
} 