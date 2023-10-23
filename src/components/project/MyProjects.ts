export interface PropsProject {
  id: string;
  title: string;
  description: string;
  techs: string[];
  img: string;
  link: string;
}

export interface ModalProjectProps {
  item: PropsProject;
  event: any;
}

export const MyProjects: PropsProject[] = [
  { 
    id: '1',
    title: 'BikCraft',
    description: 'Lorem ipsum dolor sit amet. Eum ullam officia eum expedita molestiae hic quis excepturi et veritatis harum ut ducimus ratione. Est nulla consequatur nam sint voluptatem et rerum quia',
    techs: ['html', 'css', 'js'],
    img: 'src/assets/img/bikcraft.png',
    link: 'https://palhares17.github.io/Projeto-Origamid/',
  },
  {
    id: '2',
    title: 'Tbt Comunicação',
    description: 'Lorem ipsum dolor sit amet. Eum ullam officia eum expedita molestiae hic quis excepturi et veritatis harum ut ducimus ratione. Est nulla consequatur nam sint voluptatem et rerum quia',
    techs: ['wordpress', 'css'],
    img: 'src//assets/img/tbtcomunicacao.png',
    link: 'https://tbtcomunicacao.com.br/',
  },
  {
    id: '3',
    title: 'Meu Antigo Portifólio',
    description: 'Lorem ipsum dolor sit amet. Eum ullam officia eum expedita molestiae hic quis excepturi et veritatis harum ut ducimus ratione. Est nulla consequatur nam sint voluptatem et rerum quia',
    techs: ['html', 'css', 'js'],
    img: 'src/assets/img/OldPortfolio.png',
    link: 'https://palhares17.github.io/portfolio/',
  }
];