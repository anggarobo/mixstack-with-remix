import { FilePlusIcon, PlusIcon } from "@radix-ui/react-icons";
import { Button } from "~/components/ui/button";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "~/components/ui/dialog"
import { Input } from "~/components/ui/input"
import { Label } from "~/components/ui/label"

export function DialogDemo() {
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button variant="default" className="flex gap-1">
                    <PlusIcon />
                    Add
                </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px]">
                <DialogHeader>
                    <DialogTitle className="flex gap-2 items-center">
                        <FilePlusIcon />
                        Add Income
                    </DialogTitle>
                    <DialogDescription>
                        Make changes to your balance here. Click save when you're done.
                    </DialogDescription>
                </DialogHeader>
                <div className="grid gap-4 py-4">
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="name" className="text-right">
                            Name
                        </Label>
                        <Input id="name" placeholder="Your income" className="col-span-3" />
                    </div>
                    <div className="grid grid-cols-4 items-center gap-4">
                        <Label htmlFor="amount" className="text-right">
                            Amount
                        </Label>
                        <Input id="amount" type="number" placeholder="Amount"  className="col-span-3" />
                    </div>
                </div>
                <DialogFooter>
                    <Button type="submit">Save changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    )
}
