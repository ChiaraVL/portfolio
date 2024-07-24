import { useEffect, useRef } from 'react'
import gsap from 'gsap-trial'
import DrawSVGPlugin from 'gsap-trial/DrawSVGPlugin'
import HeartImage from '../../../assets/images/heart.png' 
import './index.scss'

const HeartLogo = () => {
  const bgRef = useRef()
  const outlineLogoRef = useRef()
  const solidLogoRef = useRef()

  useEffect(() => {
    gsap.registerPlugin(DrawSVGPlugin)

    gsap
      .timeline()
      .to(bgRef.current, {
        duration: 1,
        opacity: 1,
      })
      .from(outlineLogoRef.current, {
        drawSVG: 0,
        duration: 20,
      })

    gsap.fromTo(
      solidLogoRef.current,
      {
        opacity: 0,
      },
      {
        opacity: 1,
        delay: 4,
        duration: 4,
      }
    )
  }, [])

  return (
    <div className="logo-container" ref={bgRef}>
      <img
        className="solid-logo"
        ref={solidLogoRef}
        src={HeartImage}
        alt="Heart"
      />

      <svg
        width="559pt"
        height="897pt"
        version="1.0"
        viewBox="0 0 559 897"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g
          className="svg-container"
          transform="translate(0 457) scale(.1 -.1)"
          fill="none"
        >
          <path
            ref={outlineLogoRef}
            d="M2790 8083 c-380 -24 -678 -102 -992 -255 -228 -108 -404 -224 -599
            -406 -66 -62 -156 -144 -199 -183 -45 -40 -81 -74 -81 -77 0 -3 29 -35 65
            -72 191 -193 319 -413 390 -667 66 -236 75 -325 69 -662 -5 -286 -7 -309
            -30 -379 -45 -133 -123 -244 -240 -327 -71 -49 -77 -52 -153 -61 -108 -13
            -209 -48 -284 -96 -100 -64 -168 -139 -231 -262 -24 -46 -56 -88 -72 -95 -32
            -12 -85 0 -138 32 -39 25 -69 30 -184 30 -122 0 -145 -3 -241 -31 -116 -32
            -192 -60 -272 -100 -55 -28 -169 -133 -208 -190 -26 -38 -31 -53 -31 -105 0
            -37 5 -71 10 -77 6 -5 70 10 142 32 176 53 272 68 457 70 230 2 378 -40 553
            -162 108 -76 185 -157 238 -244 48 -79 72 -149 110 -308 39 -166 73 -247 132
            -318 32 -40 93 -101 135 -137 139 -115 295 -186 473 -218 195 -35 479 -9 678
            62 54 19 98 36 97 38 -1 2 -60 39 -131 82 -177 106 -290 194 -403 321 -137
            153 -232 307 -282 457 -10 30 -21 57 -25 61 -4 3 -53 -8 -108 -25 -150 -43
            -254 -53 -398 -40 -252 21 -489 110 -629 239 -94 89 -149 180 -207 354 -40
            118 -73 242 -94 362 -3 17 -10 31 -15 31 -5 0 -24 -12 -43 -27 -31 -25 -33
            -25 -102 -12 -78 16 -224 14 -304 -4z"
          />
        </g>
      </svg>
    </div>
  )
}

export default HeartLogo
