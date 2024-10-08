import KnowMoreBtn from "@/components/KnowMoreBtn";
import Header from "@/components/Header";
import List from "@/components/List";
import Video from "@/components/Video";
import { useScrollY } from "@/hooks/useScrollY";
import useElementTop from "@/hooks/useElementTop";
import Image from "next/image";
import UseHighlightedWords from "@/hooks/useHighlightedWords";
import { use } from "react";
import { getBaseUrl } from "@/utils/getBaseUrl";

export default function Home() {
  let iconsSha = [
    {
      img: "/assets/images/ico-sha-07.png",
      text: "Contribui para a manutenção dos níveis de glicose e insulina* no sangue. Níveis normais de insulina colaboram para o controle do apetite³",
      highlight: {
        words: ["manutenção", "glicose", "insulina*", "controle do apetite"],
        type: "font-bold",
      },
    },
    {
      img: "/assets/images/ico-sha-4.png",
      text: "Com fitonutrientes antioxidantes",
      highlight: {
        words: ["antioxidantes"],
        type: "font-bold",
      },
    },
    {
      img: "/assets/images/ico-sha-04.png",
      text: "Potencializa os seus resultados no gerenciamento de peso¹",
      highlight: {
        words: ["gerenciamento de peso"],
        type: "font-bold",
      },
    },
    {
      img: "/assets/images/ico-sha-05.png",
      text: "Ajuda a perder a gordura corporal¹",
      highlight: {
        words: ["perder", "gordura"],
        type: "font-bold",
      },
    },
    {
      img: "/assets/images/ico-sha-06.png",
      text: "Pode ajudar a reduzir a circunferência do quadril e da cintura²",
      highlight: {
        words: ["reduzir a circunferência"],
        type: "font-bold",
      },
    },
    {
      img: "/assets/images/ico-sha-08.png",
      text: "Favorece o metabolismo de gorduras³",
      highlight: {
        words: ["Favorece", "metabolismo"],
        type: "font-bold",
      },
    },
  ];

  let list2 = [
    {
      img: "",
      text: "Antocianinas",
      highlight: {
        words: [""],
        type: "",
      },
    },
    {
      img: "",
      text: "Ácidos hidroxicinâmicos",
      highlight: {
        words: [""],
        type: "",
      },
    },
    {
      img: "",
      text: "Ácido ascórbico (vitamina C).",
      highlight: {
        words: [""],
        type: "",
      },
    },
  ];

  let list3 = [
    {
      img: "",
      text: "Pode ajudar a reduzir o estresse oxidativo¹.",
      highlight: {
        words: [""],
        type: "",
      },
    },
    {
      img: "",
      text: "Pode ajudar a diminuir a formação de novas células de gordura².",
      highlight: {
        words: [""],
        type: "",
      },
    },
    {
      img: "",
      text: "Pode ajudar a quebra de gordura³.",
      highlight: {
        words: [""],
        type: "",
      },
    },
    {
      img: "",
      text: "Clinicamente testado para auxiliar na redução das circunferências da cintura, quadril e da gordura abdominal⁴.",
      highlight: {
        words: [""],
        type: "",
      },
    },
    {
      img: "",
      text: "Ingrediente bioativo clinicamente testado para apoiar seu plano de perda de peso⁴.",
      highlight: {
        words: [""],
        type: "",
      },
    },
    {
      img: "",
      text: "Ajuda a perder gordura abdominal⁴.",
      highlight: {
        words: [""],
        type: "",
      },
    },
  ];

  let list4 = [
    {
      img: "/assets/images/ico-m-1.png",
      text: "Pela manhã, com o junto com o seu Shot da Imunidade",
      highlight: {
        words: ["Shot da Imunidade"],
        type: "font-bold",
      },
    },
    {
      img: "/assets/images/ico-m-2.png",
      text: "No café da manhã, com o seu Shake Herbalife",
      highlight: {
        words: ["Shake Herbalife"],
        type: "font-bold",
      },
    },
    {
      img: "/assets/images/ico-m-3.png",
      text: "Antes do almoço",
      highlight: {
        words: [""],
        type: "",
      },
    },
  ];

  const scrollY = useScrollY();
  const elementTop = useElementTop("conheca-shape-control");

  return (
    <>
      <main>
        <Header />

        <div
          id="conheca-shape-control"
          className="flex gap-[3.2vw] justify-between bg-cor-burgundy max-2md:flex-col max-2md:pt-10 max-2sm:pt-2 max-2sm:gap-2"
        >
          <div className="flex-center flex-col min-w-[50%] text-white pl-[1.5vw] max-w-[590px] max-lg:w-[40%] max-2md:w-full max-2md:max-w-none max-2md:px-5 max-2md:text-center max-2sm:px-2 max-sm:px-3">
            <div className="">
              <h2 className="text-[65px] mb-3 leading-[1.1] max-w-[600px] text-left font-bold mr-12 max-xl:mr-60 max-xl:text-[42px] max-lg:mr-48 max-2md:mr-0 max-2md:text-center max-2md:max-w-none max-2sm:text-3xl max-2sm:mb-1">
                SHAPE CONTROL
              </h2>

              <p className="text-3xl max-w-[485px] font-light max-xl:text-[32px] max-lg:text-[24px] max-2md:max-w-none max-2sm:text-xl">
                {UseHighlightedWords({
                  img: "",
                  text: "Com apenas uma cápsula por dia você ganha um aliado na perda das gordurinhas indesejadas e na redução de medidas.",
                  highlight: {
                    words: ["cápsula", "gordurinhas", "redução de medidas"],
                    type: "font-bold",
                  },
                })}
              </p>
            </div>
          </div>

          <div
            className="w-1/2 h-[600px] bg-cover bg-no-repeat max-2md:w-full max-2md:bg-center max-2sm:h-[250px]"
            style={{
              backgroundImage: `url(${getBaseUrl(
                "/assets/images/shape-control-1.png"
              )})`,
            }}
          />
        </div>

        <div className="flex gap-[3vw] justify-between max-2md:flex-col-reverse max-2md:gap-0">
          <div
            className="bg-cover bg-no-repeat w-full min-w-[40%]"
            style={{
              backgroundImage: `url(${getBaseUrl(
                "/assets/images/shape-control-2.png"
              )})`,
            }}
          />

          <div className="flex-center flex-col pr-[2vw] py-16 gap-[3vw] max-2md:pr-0 max-2md:py-2 max-2md:gap-3">
            <ul className="flex flex-wrap gap-[1vw] justify-between max-2md:flex-col max-2md:gap-5 font-light">
              {iconsSha.map((item, index) => {
                return (
                  <List
                    key={index}
                    id={index}
                    item={item}
                    styleList={{
                      li: "flex items-center gap-4 max-w-[50%] max-lg:max-w-full max-2md:px-2",
                      img: "w-20 h-20 max-2xl:w-16 max-2xl:h-16 max-2md:w-14 max-2md:h-14 max-md:w-7 max-md:h-7",
                      p: "max-2xl:text-xl",
                    }}
                  />
                );
              })}
            </ul>

            <div className="text-xs font-light max-2md:px-2 max-2md:h-16 overflow-y-scroll max-md:text-[10px]">
              <p>
                ¹Pode ajudar a apoiar um plano de controle de peso junto com um
                estilo de vida saudável e uma dieta balanceada com controle de
                calorias
              </p>

              <p>
                ²Estudos clínicos mostraram que o consumo diário de extrato de
                Laranja Moro por pelo menos 3 meses com um estilo de vida
                saudável e uma dieta balanceada com controle de calorias pode
                reduzir a circunferência da cintura e do quadril em indivíduos
                com sobrepeso.
              </p>
              <p>
                3O Cromo auxilia no metabolismo de proteínas, carboidratos e
                gorduras.
              </p>
              <p>
                Os produtos da Herbalife não são destinados ao tratamento,
                prevenção ou cura de qualquer tipo de doença. A Herbalife apoia
                e incentiva a adoção de um estilo de vida ativo e saudável
                aliado ao uso adequado dos seus produtos. Os resultados podem
                variar de acordo com a resposta metabólica de cada organismo e
                dependerão do uso adequado dos produtos.
              </p>
              <p>
                Para mais informações sobre os produtos Herbalife acesse
                www.herbalife.com.br. Leia atentamente o rótulo antes de
                consumir os produtos.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white flex items-center justify-between py-10 px-2 max-2md:flex-col max-2md:py-2 max-2md:gap-2">
          <div className="flex-center max-w-[50%] w-full max-2md:max-w-[90%]">
            <Image
              src={getBaseUrl("/assets/images/shape-control.png")}
              alt="Embalagem shape control"
              width={402}
              height={597}
              className="object-contain max-xl:h-[500px] max-2md:h-[200px]"
              priority
            />
          </div>

          <div className="flex flex-col justify-between w-full max-w-[50%] items-center gap-40 text-center max-2md:max-w-none">
            <div className="h-[650px] flex flex-col items-center justify-between border-2 border-gray-300 p-10 rounded-xl shadow-xl max-xl:h-[500px] max-2md:h-min max-2md:gap-10 max-2sm:w-MIN max-2sm:p-3 max-2sm:gap-3 relative">
              <div>
                <h2 className="text-7xl font-bold text-lime-700 max-xl:text-5xl max-md:text-3xl">
                  Shape Control
                </h2>

                <p className="text-3xl font-light text-lime-800 max-xl:text-xl max-md:text-base">
                  Aumenta sua energia e seu metabolismo.
                </p>
              </div>

              <div>
                <div className="text-left">
                  <h2 className="text-7xl font-bold max-xl:text-4xl">R$ 305</h2>

                  <div className="flex gap-5 items-center max-xl:gap-3">
                    <span className="text-4xl max-xl:text-xl">No</span>

                    <Image
                      src={getBaseUrl("/assets/images/pix.png")}
                      alt="pix"
                      width={378}
                      height={133}
                      className="h-10 w-auto mb-2 max-xl:h-5"
                    />
                  </div>
                </div>

                <div className="flex items-center gap-5 mt-7 max-xl:gap-3 max-2md:mt-2">
                  <Image
                    src={getBaseUrl("/assets/images/cartao.png")}
                    alt="cartão"
                    width={225}
                    height={225}
                    className="h-10 w-auto mb-1 max-xl:h-7"
                  />

                  <h3 className="text-4xl font-light max-xl:text-2xl max-2md:text-xl">
                    3x de R$ 100
                  </h3>
                </div>
              </div>

              <KnowMoreBtn />
            </div>
          </div>
        </div>

        {scrollY > elementTop - 150 && <KnowMoreBtn popUp={true} />}

        <Video />

        <div
          className="flex w-full h-full min-h-[790px] px-5 justify-between items-center bg-cover bg-no-repeat max-xl:flex-col max-2md:px-2"
          style={{
            backgroundImage: `url(${getBaseUrl(
              "/assets/images/bg-shape-3.png"
            )})`,
          }}
        >
          <div className="text-white pl-[4vw] py-20 flex flex-col gap-6 w-1/2 max-xl:px-0 max-xl:w-full max-xl:items-center max-xl:text-center max-xl:py-10 max-2md:py-4 max-2md:gap-4">
            <div>
              <h2 className="font-bold text-[45px] leading-[1] max-lg:text-[43px] max-sm:text-3xl">
                SHAPE CONTROL,
              </h2>
              <p className="text-4xl font-light max-w-[550px] max-lg:text-[29px] max-xl:max-w-none max-sm:text-xl">
                a combinação inteligente de 2 ativos embasados pela ciência
              </p>
            </div>

            <div className="bg-white max-w-[580px] rounded-e-xl ml-[-4vw] p-5 pl-[5vw] max-xl:self-start max-xl:max-w-[80%]  max-sm:max-w-[95%] max-sm:ml-[-20px]">
              <p className="text-black text-2xl max-lg:text-[20px]">
                {UseHighlightedWords({
                  img: "",
                  text: "Conheça mais sobre os benefícios do extrato obtido a partir da laranja moro",
                  highlight: {
                    words: ["laranja moro", "benefícios"],
                    type: "text-green-500 font-bold",
                  },
                })}
              </p>
            </div>

            <div className="max-w-[615px] flex flex-col gap-3 font-light max-xl:max-w-none max-xl:items-center">
              <p className="text-2xl max-sm:text-xl">
                {UseHighlightedWords({
                  img: "",
                  text: " Ativo natural obtido do suco das Laranjas Vermelhas Moro,cultivadas ao redor do vulcão Etna na Sicília, Itália. O solo vulcânico, rico em nutrientes, e as condições climáticas da região favorecem a obtenção do ativo com um alto teor de antioxidantes específicos, como:",
                  highlight: {
                    words: ["como:"],
                    type: "font-bold",
                  },
                })}
              </p>

              <ul className="text-2xl li-custom li-1 pl-2 max-xl:text-left max-xl:w-auto max-sm:text-xl">
                {list2.map((item, index) => {
                  return (
                    <List
                      key={index}
                      id={index}
                      item={item}
                      styleList={{
                        li: "",
                        img: "",
                        p: "text-2xl max-sm:text-xl",
                      }}
                    />
                  );
                })}
              </ul>
            </div>
          </div>

          <Image
            src={getBaseUrl("/assets/images/shape-control-04.png")}
            alt="Produto shape control e uma laranja moro"
            width={1122}
            height={1122}
            className="w-1/2 h-full max-2md:mb-2"
          />
        </div>

        <div className="flex justify-between py-24 px-[15vw] max-2xl:px-[10vw] max-xl:px-[5vw] max-xl:py-16 max-lg:flex-col max-lg:items-center max-lg:gap-10 max-2md:py-2 max-2md:px-2 max-2md:gap-4">
          <div className="flex flex-col gap-5 max-lg:items-center max-lg:text-center max-2md:gap-3">
            <h3 className="text-[40px] text-lime-600 font-bold max-xl:text-3xl">
              Elaborado com:
            </h3>

            <div className="w-[380px] max-lg:w-full max-lg:items-center max-lg:flex max-lg:flex-col">
              <Image
                src={getBaseUrl("/assets/images/morosil.png")}
                alt="morosil logo"
                width={300}
                height={65}
                className="max-2md:max-w-[200px]"
              />

              <p className="text-[22px] mt-3 font-herbalife-walsheim max-xl:text-[18px]">
                Uma marca patenteada para comercializar o ativo obtido do suco
                da laranja moro, o que garante:
              </p>
            </div>

            <div className="flex-center flex-col">
              <Image
                src={getBaseUrl("/assets/images/letter-sha-1.png")}
                alt="segurança, procedência e eficácia"
                width={300}
                height={174}
                className="max-w-[260px] max-2md:max-w-[200px] "
              />

              <p className="text-xs mt-3">
                Morosil® é uma marca registrada da Bionap S.r.l..
              </p>
            </div>

            <div className="w-[380px] max-lg:w-full flex flex-col gap-5 max-lg:items-center max-2md:gap-3">
              <h3 className="text-[40px] text-lime-600 font-bold max-xl:text-3xl">
                Segurança:
              </h3>

              <p className="text-[22px] font-herbalife-walsheim max-xl:text-[18px]">
                Aprovado nas maiores autoridades regulatórias do mundo
              </p>

              <Image
                src={getBaseUrl("/assets/images/bandeiras-2.png")}
                alt="bandeiras: anvisa - brasil, fda eua, health canada, kfda - coreia"
                width={394}
                height={393}
                className="w-[232px] max-2md:w-[200px] "
              />
            </div>
          </div>

          <div className="flex flex-col gap-5 max-lg:items-center max-2md:gap-3">
            <h3 className="text-[40px] text-lime-600 font-bold max-xl:text-3xl">
              Procedência:
            </h3>
            <div className="text-2xl w-[450px] max-lg:w-full max-lg:text-center flex flex-col gap-8 font-herbalife-walsheim max-xl:text-[18px] max-2md:gap-3">
              <p>
                Ativo natural obtido do suco das Laranjas Vermelhas Moro,
                cultivadas ao redor do vulcão Etna na Sicília, Itália.
              </p>

              <p>
                O solo vulcânico, rico em nutrientes, e as condições climáticas
                da região favorecem a obtenção do ativo com um alto teor de
                antioxidantes específicos, como:
              </p>
            </div>

            <ul className="text-2xl li-custom li-2 pl-2 font-herbalife-walsheim max-xl:text-[18px]">
              {list2.map((item, index) => {
                return (
                  <List
                    key={index}
                    id={index}
                    item={item}
                    styleList={{
                      li: "",
                      img: "",
                      p: "",
                    }}
                  />
                );
              })}
            </ul>

            <Image
              src={getBaseUrl("/assets/images/orange-2.png")}
              alt="laranja mouro"
              width={613}
              height={601}
              className="w-[460px] mt-14 max-lg:w-80 max-2md:mt-0"
            />
          </div>
        </div>

        <div className="bg-cor-burgundy flex py-20 px-[4.16vw] gap-[4.16vw] items-center max-lg:flex-col max-2md:py-2 max-2md:px-2 max-2md:gap-3">
          <div className="text-white">
            <h3 className="text-[40px] font-bold mb-3 max-2md:mb-0">
              Eficácia
            </h3>

            <p className="font-herbalife-walsheim text-[22px] mb-2 max-2sm:text-xl">
              Mecanismo de ação:
            </p>

            <ul className="font-herbalife-walsheim text-[22px] li-custom li-2 pl-2 flex flex-col gap-3 max-2sm:text-xl">
              {list3.map((item, index) => {
                return (
                  <List
                    key={index}
                    id={index}
                    item={item}
                    styleList={{
                      li: "",
                      img: "",
                      p: "",
                    }}
                  />
                );
              })}
            </ul>
          </div>

          <Image
            src={getBaseUrl("/assets/images/morosil-3.png")}
            alt="Morosil - antocianinas, flavonoides, vitamina C, ácidos hidroxicinâmicos - para ajudar a inibir a formação de novas células de gordura 4"
            width={600}
            height={498}
            className="w-[600px] max-w-[50%] h-full max-2md:min-w-[400px] max-2sm:min-w-[300px]"
          />
        </div>

        <div className="flex flex-col py-20 pt-24 gap-28 relative max-2md:pb-3 max-2md:pt-0 max-2md:gap-3">
          <Image
            src={getBaseUrl("/assets/images/explore.png")}
            alt="desenho de um olho"
            width={100}
            height={83}
            className="w-[100px] self-center absolute top-0 left-40 max-2md:static max-2md:w-[80px]"
          />
          <a
            href={getBaseUrl("/assets/pdf/rotulo-shape-control.pdf")}
            className="w-[500px] self-center cursor-pointer max-2sm:w-[300px]"
            target="_blank"
          >
            <Image
              src={getBaseUrl("/assets/images/explore-shape.png")}
              alt="explore o rótulo do shape control"
              width={500}
              height={110}
            />
          </a>

          <div className="flex px-[5vw] justify-between font-light gap-5 max-xl:px-[2vw] max-2md:flex-col">
            <div>
              <p className="text-xl max-w-[495px] mb-5 max-2md:max-w-none max-2md:text-center">
                {UseHighlightedWords({
                  img: "",
                  text: "Experimente combinar o Shape Control com outros produtos da Herbalife para potencializar ainda mais seus resultados. Temos uma linha completa de produtos à sua disposição.",
                  highlight: {
                    words: ["Shape Control", "Herbalife"],
                    type: "text-green-500 font-bold mr-32 max-xl:mr-[108px] max-lg:mr-[0px]",
                  },
                })}
              </p>

              <div className="bg-cor-burgundy text-white py-5 text-[21px] ml-[-5vw] pl-[5vw] rounded-e-3xl pr-[15vw] max-xl:pr-0">
                <p className="underline">EXPLORE NOSSO CATÁLOGO</p>

                <p className="w-80 max-2md:w-full">
                  e converse com um de nossos distribuidores independentes para
                  orientações personalizadas.
                </p>
              </div>
            </div>

            <Image
              src={getBaseUrl("/assets/images/shape-nutrev.png")}
              alt="images de produtos herbalife"
              width={300}
              height={134}
              className="max-w-[750px] w-full max-xl:w-1/2 max-2md:self-center max-2md:w-[90%]"
            />
          </div>
        </div>

        <div className="bg-cor-burgundy px-[5vw] pb-32 flex flex-col justify-between gap-20 max-lg:gap-20 max-2md:px-2 max-2md:gap-3">
          <div className="flex justify-between items-end gap-4 max-lg:flex-col max-lg:items-center max-lg:gap-16 max-2md:gap-4">
            <div className="flex flex-col gap-20 max-lg:w-full max-2md:gap-4">
              <Image
                src={getBaseUrl("/assets/images/sha-10.png")}
                alt="balão de fala com um ponto de interrogação"
                width={150}
                height={131}
                className="w-[105px] max-lg:w-[80px] "
              />

              <h3 className="text-6xl text-white w-[27rem] font-bold max-xl:text-5xl max-lg:w-full max-lg:text-center max-lg:text-4xl max-2sm:text-2xl">
                Em que momento consumir o Shape Control?
              </h3>

              <div className="bg-white py-5 w-[625px] ml-[-96px] pl-24 rounded-e-3xl pr-64 max-xl:pr-0 max-xl:w-full max-lg:self-start max-lg:ml-[-5vw] max-lg:pl-10 max-2md:py-2 max-2md:w-[70%] ">
                <p className="text-[30px] text-green-600 font-bold max-2md:text-2xl ">
                  Sugestões de uso:
                </p>

                <p className="w-72 text-[33px] font-light max-lg:w-full max-2md:text-2xl">
                  1 cápsula ao dia (todos os dias)
                </p>
              </div>
            </div>

            <video
              autoPlay
              muted
              loop
              className="w-3/5 max-w-[985px] rounded-3xl max-xl:max-w-[50%] max-lg:mb-0 max-lg:max-w-[80%] max-2sm:max-w-full"
            >
              <source
                src="https://herbalifelifeon.com.br/wp-content/uploads/2023/12/cena-consumo.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          <ul className="self-center flex justify-between w-full gap-5 max-lg:flex-col max-lg:items-center max-2md:text-center">
            {list4.map((item, index) => {
              return (
                <List
                  key={index}
                  id={index}
                  item={item}
                  styleList={{
                    li: "flex items-center gap-4 max-lg:flex-col max-lg:items-center",
                    img: "w-[86px] max-2md:w-[60px]",
                    p: "text-xl text-white w-72 max-lg:w-full",
                  }}
                />
              );
            })}
          </ul>
        </div>
      </main>
    </>
  );
}
