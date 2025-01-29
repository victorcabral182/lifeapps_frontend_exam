import { Modal } from "antd"
import { useDispatch } from "react-redux"
import { clearCart } from "@/redux/slices/cartSlice"
interface ICleanCartModalProps {
  isOpen: boolean
  onCancel: VoidFunction
}

export const CleanCartModal = ({ isOpen, onCancel }: ICleanCartModalProps) => {
  const dispatch = useDispatch()

  const handleClearCart = () => {
    dispatch(clearCart())
    onCancel()
  }

  return (
    <Modal
      centered
      open={isOpen}
      onCancel={onCancel}
      onOk={handleClearCart}
      okText={"Limpar"}
      okButtonProps={{ danger: true }}
      title={"Limpar Carrinho"}
    >
      <p className="py-4">
        Tem certeza que deseja remover todos os itens do seu carrinho?
      </p>
    </Modal>
  )
}
