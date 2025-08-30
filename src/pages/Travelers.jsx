import { useRef } from 'react';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

const Travelers = () => {
  const imgDivRef = useRef(null);
  const imgRef = useRef(null);
  gsap.registerPlugin(ScrollTrigger);

  const imgArr = [
    'https://i.pinimg.com/736x/77/c6/f6/77c6f6b1637203964d75a63530cc277c.jpg',
    'https://i.pinimg.com/1200x/0e/6b/c6/0e6bc69e252c76ecc5995a1c65535c24.jpg',
    'https://i.pinimg.com/736x/16/1f/e2/161fe2319c0d50354ae881321e3dedb2.jpg',
    'https://i.pinimg.com/736x/03/b7/7f/03b77f444ed8d319cac057a7e9884a1d.jpg',
    'https://i.pinimg.com/736x/fb/0c/1d/fb0c1d11ea32136718faf1f20b9ae798.jpg',
    'https://i.pinimg.com/1200x/fa/3f/0b/fa3f0b5302cdcbe4b59d7de4badf8d45.jpg',
    'https://i.pinimg.com/1200x/7e/ab/94/7eab94a70da2caf8acdaadd71487b5eb.jpg',
    'https://i.pinimg.com/1200x/1c/9b/3b/1c9b3b4f94371be52cd88c366412ae1b.jpg',
    'https://i.pinimg.com/736x/2e/67/7c/2e677c8ed696483be9174fac9d32fa92.jpg',
    'https://i.pinimg.com/736x/c8/79/51/c879517f882c5963e84758a35bf077c3.jpg',
    'https://img-cdn.isstracker.pl/static/cache/valery-bykovsky-img-11.jpeg?data=eyJzb3VyY2UiOiJodHRwczpcL1wvc3RhdGljLmlzc3RyYWNrZXIucGxcL2ltYWdlc1wvYXN0cm9uYXV0c1wvMVwvMTFcL3ZhbGVyeS1ieWtvdnNreS1pbWctMTEuanBlZyIsInF1YWxpdHkiOjgwLCJ3aWR0aCI6NDAwLCJoZWlnaHQiOjQwMCwiY2xpZW50IjoiaXNzdHJhY2tlciJ9',
    'https://i.pinimg.com/1200x/9d/24/fa/9d24fad25c86ff6257a6fb20e7b81556.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/c/c3/Joseph_%28Joe%29_A._Walker_%287584804534%29_%28cropped%29.jpg',
    'https://cdn.britannica.com/48/136548-050-A79C37C3/Konstantin-Petrovich-Feoktistov-1964.jpg',
    'https://science.time.com/wp-content/uploads/sites/12/2013/01/78606287_10.jpg?w=307',
  ];

  useGSAP(() => {
    let mm = gsap.matchMedia();
    mm.add('(min-width: 640px)', () => {
      gsap.to(imgDivRef.current, {
        scrollTrigger: {
          trigger: imgDivRef.current,
          markers: true,
          start: 'top 31%',
          end: 'top -65%',
          pin: true,
          pinSpacing: true,
          pinReparent: true,
          pinType: 'transform',
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (ele) => {
            let imgIndex;
            if (ele.progress < 1) {
              imgIndex = Math.floor(ele.progress * imgArr.length);
            } else {
              imgIndex = imgArr.length - 1;
            }
            imgRef.current.src = imgArr[imgIndex];
          },
        },
      });
    });

    mm.add('(max-width: 639px)', () => {
      gsap.to(imgDivRef.current, {
        scrollTrigger: {
          trigger: imgDivRef.current,
          markers: true,
          start: 'top 31%',
          end: 'top -32%',
          pin: true,
          pinSpacing: true,
          pinReparent: true,
          pinType: 'transform',
          scrub: 1,
          anticipatePin: 1,
          invalidateOnRefresh: true,
          onUpdate: (ele) => {
            let imgIndex;
            if (ele.progress < 1) {
              imgIndex = Math.floor(ele.progress * imgArr.length);
            } else {
              imgIndex = imgArr.length - 1;
            }
            imgRef.current.src = imgArr[imgIndex];
          },
        },
      });
    });
  });

  return (
    <div className="parent">
      <div id="page1" className="section1 relative py-[1px]">
        <div
          ref={imgDivRef}
          className="absolute overflow-hidden min-h-[250px] min-w-[190px] h-[20vw] w-[15vw] rounded-2xl top-75 left-[10vw] sm:left-[16vw] md:top-60 md:left-[19vw] lg:left-[23vw] xl:left-[28vw]"
        >
          <img
            ref={imgRef}
            className="object-cover w-full h-full"
            src="https://i.pinimg.com/736x/77/c6/f6/77c6f6b1637203964d75a63530cc277c.jpg"
            alt="Cosmic Explorers"
          />
        </div>
        <div className="font-[universe500] relative">
          <div className="mt-[55vh]">
            <h1 className="text-[18vw] uppercase text-center leading-[18vw]">
              c o s m i c
            </h1>
            <h1 className="text-[13vw] uppercase text-center leading-[12vw]">
              explorers
            </h1>
          </div>
          <div className="font-[universe300] pl-[25%] sm:pl-[45%] mt-20">
            <p className="text-2xl sm:text-4xl indent-5 md:indent-40 [word-spacing:0.3rem]">
              Our journey into space began with courage and curiosity. In 1961,
              Yuri Gagarin became the first to see Earth from above, fragile and
              beautiful in the vast cosmos. Space travel is more than technology
              it is vision and hope. Every traveler carries the dream of
              discovery, reminding us that exploration is part of who we are.
            </p>
          </div>
        </div>
      </div>
      <div className="section2 h-screen"></div>
    </div>
  );
};

export default Travelers;
