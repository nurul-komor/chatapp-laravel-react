import { forwardRef, useEffect, useRef } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
export default forwardRef(function TextInput(
    { type = "text", className = "", isFocused = false, ...props },
    ref
) {
    const input = ref ? ref : useRef();

    useEffect(() => {
        if (isFocused) {
            input.current.focus();
        }
    }, []);

    return (
        <input
            {...props}
            type={type}
            className={cn(
                "mt-1 w-full rounded-[5px] border-gray-200 shadow-sm sm:text-sm " +
                    className
            )}
            ref={input}
        />
    );
});
