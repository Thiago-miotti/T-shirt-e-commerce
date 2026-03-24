import { Header } from "./Header";

interface LayoutWrapperProps {
    children: React.ReactNode
}

export default function LayoutWrapper({ children }: LayoutWrapperProps) {
    return (
        <div className="w-full h-screen bg-gray-1 overflow-hidden">
            <Header className="pl-32" />
            {children}
        </div>
    )
}