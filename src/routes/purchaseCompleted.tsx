import { Link, createFileRoute, useNavigate } from '@tanstack/react-router'
import Logo from "../assets/Logo.png"
import { Link as LinkButton } from "../components/ui/Link"
import { useCartStore } from '../store/useCartStore'

export const Route = createFileRoute('/purchaseCompleted')({
    component: RouteComponent,
})

function RouteComponent() {
    const { items, resetCart } = useCartStore()
    const navigate = useNavigate()
    return (
        <div className='w-full h-screen bg-gray-1 flex flex-col items-center'>
            <img src={Logo} alt="Logo" width={130} height={52} className='mt-16' />

            <div className='w-[316px] h-[140px] mt-28 flex items-center justify-center'>
                {items.map((item, i) => (
                    <div key={item.id} className={`rounded-full aspect-square shadow-2xl w-36 h-36 bg-linear-to-b from-[#1EA483] to-[#7465D4] flex justify-center items-center ${i !== 0 ? "-ml-8" : ""} z-[${10 + i}]`}>
                        <img src={item.image} alt="Logo" width={130} height={130} />
                    </div>
                ))}
            </div>

            <div className='mt-12 text-center max-w-[590px] flex flex-col gap-6'>
                <h1 className='font-default text-3xl font-bold text-gray-4'>Compra efetuada!</h1>
                <p className='font-default text-2xl text-gray-3'>Uhuul, sua compra de {items.length} camisetas já está a caminho da sua casa. </p>
            </div>

            <div className='mt-16'>
                <LinkButton onClick={() => {
                    navigate({ to: '/' });
                    resetCart();
                }}>
                    Voltar ao catálogo
                </LinkButton>
            </div>

        </div>
    )
}
