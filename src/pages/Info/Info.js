import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Button from '@mui/material/Button';
import { Col, Row } from 'react-bootstrap'

import { Modal, Box } from "@mui/material";


const linguagens = [
  {
    id: 1,
    nome: "JavaScript",
    descricao: `
      <h2>O que é JavaScript?</h2>
      <p>JavaScript é uma linguagem de programação amplamente usada para desenvolvimento web. Ela é executada no lado do cliente (navegador), o que a torna essencial para criar sites dinâmicos e interativos.</p>
      <h3>Características:</h3>
      <ul>
        <li>Altamente utilizada para desenvolvimento front-end, mas também pode ser usada no back-end com Node.js.</li>
        <li>Suporte a manipulação de DOM, eventos, animações, e chamadas de API.</li>
        <li>Uma das principais tecnologias da web, junto com HTML e CSS.</li>
      </ul>
    `,
    motivos: `
      <ul>
        <li>JavaScript é uma das linguagens mais populares do mundo, essencial para o desenvolvimento web moderno.</li>
        <li>Ampla demanda no mercado para desenvolvedores front-end e full-stack.</li>
        <li>Extensas oportunidades de carreira, já que praticamente todos os websites usam JavaScript.</li>
      </ul>
    `
  },
  {
    id: 2,
    nome: "Python",
    descricao: `
      <h2>O que é Python?</h2>
      <p>Python é uma linguagem de programação de alto nível, conhecida por sua simplicidade e legibilidade. É amplamente utilizada em diversas áreas como desenvolvimento web, automação, ciência de dados, inteligência artificial, e muito mais.</p>
      <h3>Características:</h3>
      <ul>
        <li>Fácil de aprender e escrever, com uma sintaxe limpa e direta.</li>
        <li>Grande biblioteca padrão, permitindo automação, web scraping, e processamento de dados.</li>
        <li>Popular em áreas de machine learning, ciência de dados e inteligência artificial.</li>
      </ul>
    `,
    motivos: `
      <ul>
        <li>Python é altamente demandado em áreas como ciência de dados e inteligência artificial.</li>
        <li>Sua simplicidade e grande comunidade tornam o aprendizado rápido e acessível.</li>
        <li>É uma linguagem versátil, usada em vários setores, desde tecnologia até finanças e biotecnologia.</li>
      </ul>
    `
  },
  {
    id: 3,
    nome: "Java",
    descricao: `
      <h2>O que é Java?</h2>
      <p>Java é uma linguagem de programação orientada a objetos, desenvolvida pela Sun Microsystems (atualmente Oracle). Ela é muito utilizada para desenvolvimento de aplicações empresariais e sistemas de grande escala.</p>
      <h3>Características:</h3>
      <ul>
        <li>Plataforma independente, com o conceito de "Write Once, Run Anywhere" (escreva uma vez, execute em qualquer lugar).</li>
        <li>Altamente utilizada no desenvolvimento de aplicações Android.</li>
        <li>Suporte a multithreading, o que a torna ideal para sistemas que requerem alta performance.</li>
      </ul>
    `,
    motivos: `
      <ul>
        <li>Java é uma linguagem amplamente utilizada em empresas para desenvolvimento de software robusto e de grande escala.</li>
        <li>Altamente procurada no mercado, especialmente para desenvolvimento de sistemas empresariais e Android.</li>
        <li>Possui grande estabilidade e ampla comunidade de suporte.</li>
      </ul>
    `
  },
  {
    id: 4,
    nome: "C#",
    descricao: `
      <h2>O que é C#?</h2>
      <p>C# (pronuncia-se "C-sharp") é uma linguagem de programação desenvolvida pela Microsoft como parte da sua plataforma .NET. É amplamente utilizada para desenvolvimento de aplicações Windows, jogos e software empresarial.</p>
      <h3>Características:</h3>
      <ul>
        <li>Integrada ao .NET Framework, permitindo fácil acesso a uma ampla gama de bibliotecas e ferramentas.</li>
        <li>Comumente usada no desenvolvimento de jogos com o Unity.</li>
        <li>Altamente versátil, podendo ser utilizada para aplicações desktop, web, e serviços backend.</li>
      </ul>
    `,
    motivos: `
      <ul>
        <li>Altamente utilizada em desenvolvimento de software para Windows e jogos com o Unity.</li>
        <li>Grande demanda em empresas que usam a plataforma .NET.</li>
        <li>É uma linguagem versátil, com bom suporte a desenvolvimento de aplicativos desktop, web e mobile.</li>
      </ul>
    `
  },
  {
    id: 5,
    nome: "Ruby",
    descricao: `
      <h2>O que é Ruby?</h2>
      <p>Ruby é uma linguagem de programação dinâmica, de código aberto, com foco na simplicidade e na produtividade. Ela tem uma sintaxe elegante e fácil de ler.</p>
      <h3>Características:</h3>
      <ul>
        <li>Popular para o desenvolvimento web, especialmente com o framework Ruby on Rails.</li>
        <li>Alta produtividade com código conciso e legível.</li>
        <li>Orientada a objetos e com suporte a programação funcional.</li>
      </ul>
    `,
    motivos: `
      <ul>
        <li>Ruby on Rails facilita o desenvolvimento rápido de aplicações web robustas.</li>
        <li>Comunidade ativa e muitas gems (bibliotecas) disponíveis para diversas funcionalidades.</li>
        <li>Ótima para startups e projetos que necessitam de desenvolvimento ágil.</li>
      </ul>
    `
  },
  {
    id: 6,
    nome: "PHP",
    descricao: `
      <h2>O que é PHP?</h2>
      <p>PHP é uma linguagem de script do lado do servidor, especialmente projetada para desenvolvimento web. Ela é amplamente usada para criar sites dinâmicos e interativos.</p>
      <h3>Características:</h3>
      <ul>
        <li>Executada no servidor, com suporte a uma ampla gama de bancos de dados.</li>
        <li>Facilmente integrada com HTML, CSS e JavaScript para criação de sites dinâmicos.</li>
        <li>Popular em sistemas de gerenciamento de conteúdo, como WordPress.</li>
      </ul>
    `,
    motivos: `
      <ul>
        <li>PHP é fundamental para o funcionamento de muitos sistemas de gerenciamento de conteúdo como WordPress, Drupal e Joomla.</li>
        <li>Ampla demanda para desenvolvedores web que utilizam PHP.</li>
        <li>Facilidade de hospedagem e implantação em diversos provedores de hospedagem.</li>
      </ul>
    `
  },
  {
    id: 7,
    nome: "Go",
    descricao: `
      <h2>O que é Go?</h2>
      <p>Go, também conhecida como Golang, é uma linguagem de programação desenvolvida pelo Google, que se destaca por sua simplicidade e desempenho elevado. Ela é particularmente eficiente para serviços de backend.</p>
      <h3>Características:</h3>
      <ul>
        <li>Compilação rápida e execução eficiente.</li>
        <li>Suporte robusto a concorrência, ideal para sistemas distribuídos.</li>
        <li>Amplamente utilizada em projetos de infraestrutura de servidores e microsserviços.</li>
      </ul>
    `,
    motivos: `
      <ul>
        <li>Go é ideal para desenvolvimento de sistemas de alta performance e escaláveis.</li>
        <li>Grande demanda em empresas de tecnologia que trabalham com infraestrutura e serviços em nuvem.</li>
        <li>Sintaxe simples e eficiente, facilitando o desenvolvimento e a manutenção de código.</li>
      </ul>
    `
  },
  {
    id: 8,
    nome: "Swift",
    descricao: `
      <h2>O que é Swift?</h2>
      <p>Swift é uma linguagem de programação desenvolvida pela Apple, utilizada principalmente para o desenvolvimento de aplicativos iOS, macOS, watchOS e tvOS.</p>
      <h3>Características:</h3>
      <ul>
        <li>Sintaxe concisa e segura, projetada para ser fácil de aprender.</li>
        <li>Altamente performática e com suporte a linguagens modernas.</li>
        <li>Integração perfeita com Objective-C e Cocoa.</li>
      </ul>
    `,
    motivos: `
      <ul>
        <li>Swift é a linguagem oficial para desenvolvimento de aplicativos iOS, aumentando as oportunidades no mercado de aplicativos móveis.</li>
        <li>Desempenho elevado e segurança de código, reduzindo erros comuns durante o desenvolvimento.</li>
        <li>Grande suporte da Apple e uma comunidade ativa de desenvolvedores.</li>
      </ul>
    `
  },
  {
    id: 9,
    nome: "Rust",
    descricao: `
      <h2>O que é Rust?</h2>
      <p>Rust é uma linguagem de programação focada em segurança e desempenho. Ela é amplamente utilizada em sistemas que exigem alta performance e controle de memória, sem sacrificar a segurança.</p>
      <h3>Características:</h3>
      <ul>
        <li>Segurança de memória garantida, com verificação em tempo de compilação.</li>
        <li>Desempenho comparável ao C e C++, mas com um design mais seguro.</li>
        <li>Utilizada em sistemas de baixo nível e desenvolvimento de infraestrutura de servidores.</li>
      </ul>
    `,
    motivos: `
      <ul>
        <li>Rust oferece segurança de memória sem sacrificar o desempenho, tornando-o ideal para sistemas críticos.</li>
        <li>Alta demanda em áreas como desenvolvimento de sistemas, jogos e blockchain.</li>
        <li>Comunidade em crescimento e suporte de grandes empresas como Mozilla e Microsoft.</li>
      </ul>
    `
  },
  {
    id: 10,
    nome: "Kotlin",
    descricao: `
      <h2>O que é Kotlin?</h2>
      <p>Kotlin é uma linguagem de programação moderna, interoperável com Java, e oficial para desenvolvimento Android. Ela foi projetada para ser mais expressiva e concisa que o Java, mantendo compatibilidade com o ecossistema Java.</p>
      <h3>Características:</h3>
      <ul>
        <li>Interoperável com código Java existente.</li>
        <li>Sintaxe mais concisa e segura que Java, reduzindo a probabilidade de erros.</li>
        <li>Linguagem oficial para desenvolvimento de aplicativos Android.</li>
      </ul>
    `,
    motivos: `
      <ul>
        <li>Kotlin é a linguagem preferida para desenvolvimento Android, aumentando as oportunidades de carreira na área de mobile.</li>
        <li>Sintaxe concisa e moderna que acelera o desenvolvimento e facilita a manutenção do código.</li>
        <li>Interoperabilidade total com Java, permitindo a integração com projetos existentes.</li>
      </ul>
    `
  },
  {
    id: 11,
    nome: "TypeScript",
    descricao: `
      <h2>O que é TypeScript?</h2>
      <p>TypeScript é uma linguagem de programação que é um superconjunto de JavaScript, adicionando tipagem estática opcional. Ela foi projetada para melhorar a experiência de desenvolvimento em grandes aplicações JavaScript.</p>
      <h3>Características:</h3>
      <ul>
        <li>Permite detectar erros em tempo de compilação graças à tipagem estática.</li>
        <li>Interoperável com qualquer código JavaScript.</li>
        <li>Amplamente utilizado em grandes aplicações web e projetos que requerem escalabilidade.</li>
      </ul>
    `,
    motivos: `
      <ul>
        <li>TypeScript melhora a qualidade do código e facilita a manutenção em grandes projetos.</li>
        <li>Alta demanda em empresas que desenvolvem aplicações complexas e escaláveis.</li>
        <li>Melhor integração com frameworks modernos como Angular, React e Vue.js.</li>
      </ul>
    `
  },
  {
    id: 12,
    nome: "Scala",
    descricao: `
      <h2>O que é Scala?</h2>
      <p>Scala é uma linguagem de programação que combina conceitos de programação orientada a objetos e funcional. Ela é popular em ambientes corporativos e de ciência de dados, especialmente para trabalhar com grandes volumes de dados.</p>
      <h3>Características:</h3>
      <ul>
        <li>Suporte a programação funcional e orientada a objetos.</li>
        <li>Interoperável com Java e compatível com o ecossistema JVM.</li>
        <li>Popular em processamento de dados e sistemas distribuídos.</li>
      </ul>
    `,
    motivos: `
      <ul>
        <li>Scala é altamente eficiente para processamento de grandes volumes de dados, especialmente com frameworks como Apache Spark.</li>
        <li>Interoperabilidade com Java permite a utilização de vastas bibliotecas existentes.</li>
        <li>Adotada por empresas de tecnologia de ponta para desenvolver sistemas escaláveis e de alto desempenho.</li>
      </ul>
    `
  },
];

const Info = () => {
    const { id } = useParams();
    const linguagem = linguagens.find((lang) => lang.id === parseInt(id));
    const navigate = useNavigate(); // Hook para navegação
  
    return (
      <div style={{marginInline: '10%',marginTop: '5%'}}>
        <h1>{linguagem.nome}</h1>
        <div dangerouslySetInnerHTML={{ __html: linguagem.descricao }} />
  
        <Accordion style={{backgroundColor: '#323232', borderRadius: '25px', color: 'white', margin: '1%'}}>
          <AccordionSummary expandIcon={<ExpandMoreIcon style={{color: 'white'}}/>}>
            <h3>Por que aprender {linguagem.nome}?</h3>
          </AccordionSummary>
          <AccordionDetails>
            <div dangerouslySetInnerHTML={{ __html: linguagem.motivos }} />
          </AccordionDetails>
        </Accordion>
  
        {/* Botão de voltar */}
       <Row style={{display: 'flex', justifyContent: 'center', margin: '1%'}}>
       <Button
          variant="contained"
          color="primary"
          onClick={() => navigate('/')} // Redireciona para a página de seleção
          style={{ marginTop: "25px", color: "white", backgroundColor: "#323232", borderRadius: '25px' }}
        >
          Voltar para a Seleção
        </Button>
       </Row>
      </div>
    );
  };
  
  export default Info;