"use client";

import React from "react"
import { Button } from "./ui/button"
import { Loader2 } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

import { useRouter } from "next/navigation";
import { error } from "console";
import { logOutAction } from "@/actions/users";

function LogOutButton() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const handleLogOut = async () => {
        setLoading(true)
        await new Promise((resolve) => setTimeout(resolve, 2000));

        const errorMessage = await logOutAction();
        if (!errorMessage) {
            toast("You have been successfully logged out");
            router.replace("/");
        }
        else {
            toast("Error");
        }

        setLoading(false)
    };

    return (
        <Button
            variant="outline"
            onClick={handleLogOut}
            disabled={loading}
            className="w-24"
        >
            {loading ? <Loader2 className="animate-spin" /> : "Log Out"}
        </Button>
    );
}
export default LogOutButton