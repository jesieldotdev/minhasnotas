import Lottie from "react-lottie-player"
import Loading from '../../assets/loading.json'

interface LoadingLottieProps {

}

export const LoadingLottie = () => {
    return (
        <Lottie
            loop
            play
            style={{ width: 300, height: 300 }}
            animationData={Loading}
            className="text-center"
            />
    )
}