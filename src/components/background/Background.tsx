import type { ReactNode } from 'react';
type IBackgroundProps = {
  children: ReactNode;
  color?: string;
  imageUrl?: string;
  image?: string;
};
import a from '../../../public/bg.jpg'
const Background = (props: IBackgroundProps) => {
  return (
    <div className='bg-black w-full pt-20'>
      <img className='absolute top-0 z-0 w-full h-screen' src="https://lh3.googleusercontent.com/pw/AP1GczMgSQ65z94xuGleZQ4OmfE3bUjXQyYV_a4hht7xmrH9XRHs2qV4Jos79rO_QOkNjxYzWSifixSNUc2PiJDQLGLf7drs_8KwIPlMjdEPr2-yXRRll3nDe_mUOBcgf4yhm2h2A26VgSVrif4QEboLScE=w1440-h688-s-no-gm?authuser=0" alt="no" />
      <div className='relative z-10'>
        {props.children}
      </div>
    </div>
  )
}

export default Background;
