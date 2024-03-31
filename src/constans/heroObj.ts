
import HeroImg from "../assets/Group.svg";
import aboutTouchImg from '../assets/touch.svg';
import aboutSideImg from '../assets/sideImg.png';
import ServiceSecond from '../assets/undraw.png';
import ServiceThird from '../assets/undraw1.png';


// Hero Page Array Of Object
interface HeroObj {
    id:string;
    title: string;
    para:string;
    img: string
}
const heroObj:HeroObj[] = [
    {
        id:"1",
        title: "Introduce Your Product",
        para: `Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim.`,
        img: HeroImg
    }
]



// About Page Array Of Object:
interface AboutObj {
    id:string;
    title: string;
    strongTittle1:string;
    strongPara1:string;
    strongTittle2:string;
    strongPara2:string;
    para:string;
    img: string
    imgStrong1:string;
    imgStrong2:string;
}


export const aboutObj:AboutObj[] = [
    {
        id: "1",
        title: "Light, Fast & Powerful",
        para: ` Lorem ipsum dolor sit amet, consectetuer adipiscing elit. 
        Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. `,
        imgStrong1: aboutTouchImg,
        imgStrong2:aboutTouchImg,
        strongPara1:` Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
        </p>`,
        strongPara2:` Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. 
        </p>`,
        strongTittle1:"Title Goes Here",
        strongTittle2:"Title Goes Here",
        img: aboutSideImg
    },
]


// Service Page Array Of Object:
interface ServiceObj {
    id:string;
    title: string;
    para:string;
    img: string
}
export const serviceObj:ServiceObj[] = [
    {
        id:'1',
        title:"Light, Fast & Powerful",
        para:`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. `,
        img: aboutSideImg
    },
    {
        id:'2',
        title:"Light, Fast & Powerful",
        para:`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. `,
        img: ServiceSecond
    },
    {
        id:'3',
        title:"Light, Fast & Powerful",
        para:`Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus
        mus. `,
        img: ServiceThird
    },
]
export default heroObj;