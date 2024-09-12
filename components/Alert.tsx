import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { IoClose } from "react-icons/io5";
interface AlertDialogProps {
  name: string;
  description: string;
}

export function AlertDialogDemo({ name, description }: AlertDialogProps) {
  return (
    <AlertDialog >
      {" "}
      
      <AlertDialogTrigger asChild>
        <Button className="text-[var(--secondary)] text-[.6rem] lg:text-base bg-[var(--primary)] border-slate-500" variant="outline">{name}</Button>
      </AlertDialogTrigger>
      <AlertDialogContent>
        <div className="flex justify-end text-3xl ">

        <AlertDialogCancel><div className="text-3xl"><IoClose/></div></AlertDialogCancel>
        </div>
        <AlertDialogHeader>
          <AlertDialogDescription>{description}</AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
