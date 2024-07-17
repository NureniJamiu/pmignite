import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet"
import { MenuIcon } from "lucide-react"
import DialogButton from "./Dialog"

const SheetButton = () => {
    return (
        <Sheet>
            <SheetTrigger asChild>
                <MenuIcon className="text-gray-200" />
            </SheetTrigger>
            <SheetContent>
                <div className="grid gap-2 py-4 mt-5">
                    <DialogButton />
                    <Button type="submit" className="font-semibold bg-blue-400 hover:bg-blue-500">Get Started</Button>
                </div>
            </SheetContent>
        </Sheet>
    )
}
export default SheetButton;