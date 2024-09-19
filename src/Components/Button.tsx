
interface Props {
  styles: string
}

const Button = ({styles}: Props) => {
  return (
    <button type="button" className={`font-poppins font-medium px-6 py-3 bg-blue-gradient text-[18px] text-primary outline-none ${styles}`}>
      Get Started
    </button>
  )
}

export default Button