import { Button } from "@/components/ui/button"
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"

const DialogButton = ({
    className,
}: {
    className?: string;
}) => {
    return (
        <Dialog >
            <DialogTrigger asChild>
                <Button variant="outline" className={`w-full ${className}`}>Join Waitlist</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] md:max-w-3xl mx-auto">
                <DialogHeader>
                    <DialogTitle>Join Waitlist</DialogTitle>
                    <DialogDescription>
                        Are you a project manager looking to apply your skills to a real-world problem?
                    </DialogDescription>
                </DialogHeader>
                <div className="flex justify-center w-full h-[80vh] overflow-y-scroll mx-auto">
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSfSdPueXLkCEuYHO4zEvVSYlJFdaJF06Fq_vYifN5yNACtI8Q/viewform?embedded=true" width="640" height="1124">Loading…</iframe>
                </div>
            </DialogContent>
        </Dialog>
    )
}

export default DialogButton;