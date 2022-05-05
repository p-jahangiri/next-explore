import { MouseEvent, useState } from "react";
import { SliderData } from "static";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import ArrowRight from "assets/svg/arrowLeft.svg";
import ArrowLeft from "assets/svg/arrowRight.svg";
import CardSlider from "./CardSlider";
import clsx from "clsx";
import Dot from "assets/svg/dat.svg";
import s from "./slider.module.scss";

export default function Slider() {
  const [openMenu, setOpenMenu] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const [sliderRef, instanceRef] = useKeenSlider<HTMLDivElement>({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    slides: { perView: 8, spacing: 20 },
    created() {
      setLoaded(true);
    },
  });


  return (
    <>
      <div className={s.wrapper}>
        <div className={s.keen}>
          <div
            ref={sliderRef}
            className="keen-slider"
          >
            {SliderData.map((slide, index: number) => {
              return (
                <div
                  key={index}
                  className={clsx(s.sliderItem, "keen-slider__slide")}
                >
                  <CardSlider img={slide.img} title={slide.title} />
                </div>
              );
            })}
          </div>
        </div>
        {loaded && instanceRef.current && (
          <div
            style={{
              position: "relative",
              marginTop: "-230px",
            }}
          >
            <div
              className={clsx(
                currentSlide === 0 ? s.opacity_hidden : s.opacity_show,
                s.arrow_left
              )}
            >
              <ArrowLeft
                onClick={(e) => {
                  instanceRef.current?.prev();
                }}
              />
            </div>

            <div
              className={clsx(
                currentSlide ===
                  instanceRef.current.track.details.slides.length - 8
                  ? s.opacity_hidden
                  : s.opacity_show,
                s.arrow_right
              )}
            >
              <ArrowRight onClick={(e) => instanceRef.current?.next()} />
            </div>
          </div>
        )}
        <div onClick={() => setOpenMenu(!openMenu)}>
          <Dot className={s.iconDot} />
        </div>
        {openMenu && (
          <div className={s.menuSlider}>
            <p>همه دسته بندی ها</p>
            <div className={s.menuItem}>
              {SliderData.map((slide, index: number) => {
                return (
                  <div key={index}>
                    <CardSlider
                      img={slide.img}
                      title={slide.title}
                      className={clsx(s.menuItem)}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}
