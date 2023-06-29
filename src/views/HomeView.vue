<script>
import background from "../assets/images/background.jpeg"
import brand from "../assets/images/brand.png"
import doctorAbout from "../assets/images/doctors.jpg"

  export default (await import('vue')).defineComponent({
    data(){
      return {
        background,
        brand,
        doctorAbout
      }
    }
  })



</script>

<template>
  <div>
    <header>
      <div class="line-contact">
        <div class="container flex justify-content-between">
          <div class="contacts">
            <p>
              <font-awesome-icon class="top-icons" icon="fa-solid fa-phone" /> 3373-2369
            </p>
            <p>
              <font-awesome-icon class="top-icons" icon="fa-solid fa-envelope" /> kleryston@mail.com
            </p>
            <p>
              <font-awesome-icon class="top-icons" icon="fa-solid fa-location-dot" />Rua Mariz de Barro
            </p>
          </div>
          <div class="social-media">
            <font-awesome-icon class="top-icons" :icon="['fab', 'square-facebook']" />
            <font-awesome-icon class="top-icons" :icon="['fab', 'square-twitter']" />
            <font-awesome-icon class="top-icons" :icon="['fab', 'linkedin']" />
            <font-awesome-icon class="top-icons" :icon="['fab', 'square-instagram']" />
          </div>
        </div>
      </div>
      <div class="container flex justify-content-between">
        <div class="brand">
          <img :src="brand" alt="brand">
        </div>
        <nav>
          <ul class="flex menu">
            <li><a href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Doctors</a></li>
            <li><a href="#">Contato</a></li>
          </ul>
        </nav>
      </div>
      
    </header>
    <main>
      <div class="background-header" :style="'background-image:url('+background+')'">
        <div class="shadow">
          <div class="container-banner flex justify-content-center">
            <div class="container">
              <div class="row flex flex-wrap">
                <div class="col-lg-6 flex flex-direction-column justify-content-center tc-white p-10">
                  <h1 class="fs-45">Cuidados de saúde excepcionais para todos</h1>
                  <p class="t-margin-0">Em um dado instante, tudo o que o cirurgião sabe de repente se torna importante para a solução do problema. Você não pode fazer isso uma hora depois ou amanhã. Você também não pode ir à biblioteca e pesquisar</p>
                  <div class="flex t-margin-3">
                    <button class="btn-solid-white r-margin-3">Agendamentos</button>
                    <button class="btn-solid-inline">Saiba Mais</button>
                  </div>
                </div>
                <div class="col-lg-6">
                </div>
              </div>                              
            </div>
          </div>
        </div>
      </div>
      <div class="container flex box-shadow-1 border-radius-10 -t-margin-80 bg-white">
        <div class="box-header flex justify-content-around flex-direction-column text-center">
          <font-awesome-icon class="fs-20 tc-purple" icon="fa-solid fa-house-chimney-medical" />
          <h2 class="tc-purple">850</h2>
          <p class="fw-bold">Leitos</p>
        </div>
        <div class="box-header flex justify-content-around flex-direction-column text-center">
          <font-awesome-icon class="fs-20 tc-purple" icon="fa-solid fa-people-group" />
          <h2 class="tc-purple">12000+</h2>
          <p class="fw-bold">Pacientes Satisfeitos</p>
        </div>
        <div class="box-header flex justify-content-around flex-direction-column text-center">
          <font-awesome-icon class="fs-20 tc-purple" icon="fa-solid fa-user-doctor" />
          <h2 class="tc-purple">520</h2>
          <p class="fw-bold">Médicos</p>
        </div>
        <div class="box-header flex justify-content-around flex-direction-column text-center">
          <font-awesome-icon class="fs-20 tc-purple" icon="fa-solid fa-award" />
          <h2 class="tc-purple">32</h2>
          <p class="fw-bold">Certificações</p>
        </div>
      </div>
      <div class="container t-margin-50">
        <div class="row flex flex-wrap">
          <div class="col-lg-6 flex flex-direction-column justify-content-center">
            <div class="box-image-about">
              <img :src="doctorAbout" class="doctor-about-image" alt="doctors">
            </div>
          </div>
          <div class="col-lg-6 flex flex-direction-column justify-content-center">
            <div class="doctorDescription">
              <h1 class="b-margin-2 tc-gray-300">Sobre o Nosso Hospital</h1>

              <p class="tc-gray-400 fw-6 b-margin-2 line-h-1">O médico é o profissional que busca diagnosticar, tratar e curar pessoas doentes. Ele pode ser generalista, ou seja, atender todos os tipos de encaminhamentos da área médica, ou especializado em alguma atividade ou função específica.               
              </p>

              <p class="t-margin-2 tc-gray-400">
                <font-awesome-icon class="tc-purple" :icon="['fas', 'circle-check']" />
                Navegue em Nosso Site
              </p>
              <p class="t-margin-2 tc-gray-400">
                <font-awesome-icon class="tc-purple" :icon="['fas', 'circle-check']" />
                Escolha entre vários Serviços
              </p>
              <p class="t-margin-2 tc-gray-400 b-margin-2">
                <font-awesome-icon class="tc-purple" :icon="['fas', 'circle-check']" />
                Contato direto
              </p>

              <button class="btn-solid-primary t-margin-3">Agendamentos</button>
            </div>
          </div>
        </div>
      </div>
      <div class="container t-margin-50">
        <div class="row flex flex-wrap card-service">
          <div class="col-lg-3 flex flex-direction-column justify-content-center b-margin-3">
            <div class="card-service box-shadow-2 flex justify-content-center align-item-center flex-direction-column text-center">
              <font-awesome-icon class="tc-purple fs-50" :icon="['fas', 'heart']" />
              <h1 class="t-margin-0">
                Vidas
              </h1>
              <p class="t-margin-2 b-margin-6">
                Salvar vidas é o nosso objetivo principal
              </p>
            </div>
          </div>
          <div class="col-lg-3 flex flex-direction-column justify-content-center b-margin-3">
            <div class="card-service box-shadow-2 flex justify-content-center align-item-center flex-direction-column text-center">
              <font-awesome-icon class="tc-purple fs-50" :icon="['fas', 'laptop-medical']" />
              <h1 class="t-margin-0">
                Teleatendimento
              </h1>
              <p class="t-margin-2">
                Referência em atendimento virtual, nossos profissionais estão completamente capacitados com a tecnologia.
              </p>
            </div>
          </div>
          <div class="col-lg-3 flex flex-direction-column justify-content-center b-margin-3">
            <div class="card-service box-shadow-2 flex justify-content-center align-item-center flex-direction-column text-center">
              <font-awesome-icon class="tc-purple fs-50" :icon="['fas', 'heart-pulse']" />
              <h1 class="t-margin-0">
                Tratamentos
              </h1>
              <p class="t-margin-2">
                Realizamos os melhores tratamentos, com as principais tecnologias disponíveis do mercado.
              </p>
            </div>
          </div>
          <div class="col-lg-3 flex flex-direction-column justify-content-center b-margin-3">
            <div class="card-service box-shadow-2 flex justify-content-center align-item-center flex-direction-column text-center">
              <font-awesome-icon class="tc-purple fs-50" :icon="['fas', 'microscope']" />
              <h1 class="t-margin-0">
                Exames
              </h1>
              <p class="t-margin-2">
                Exames laboratóriais feitos de forma rápida, e com resultados entregues na hora.
              </p>
            </div>
          </div>
          <div class="col-lg-3 flex flex-direction-column justify-content-center">
            <div class="card-service box-shadow-2 flex justify-content-center align-item-center flex-direction-column text-center">
              <font-awesome-icon class="tc-purple fs-50" :icon="['fas', 'tooth']" />
              <h1 class="t-margin-0">
                Plano Odontológico
              </h1>
              <p class="t-margin-2">
                Incluso plano odontológico integral.
              </p>
            </div>
          </div>
          <div class="col-lg-3 flex flex-direction-column justify-content-center">
            <div class="card-service box-shadow-2 flex justify-content-center align-item-center flex-direction-column text-center">
              <font-awesome-icon class="tc-purple fs-50" :icon="['fas', 'hospital']" />
              <h1 class="t-margin-0">
                Diversas Unidades
              </h1>
              <p class="t-margin-2">
                Existem diversas unidades expalhadas por todo o mundo, prontas para o seu atendimento.
              </p>
            </div>
          </div>
          <div class="col-lg-3 flex flex-direction-column justify-content-center">
            <div class="card-service box-shadow-2 flex justify-content-center align-item-center flex-direction-column text-center">
              <font-awesome-icon class="tc-purple fs-50" :icon="['fas', 'star-of-life']" />              <h1 class="t-margin-0">
                Pronto Atendimento
              </h1>
              <p class="t-margin-2">
                Possuimos ambulâncias em prontidão para qualquer emergência.
              </p>
            </div>
          </div>
          <div class="col-lg-3 flex flex-direction-column justify-content-center">
            <div class="card-service box-shadow-2 flex justify-content-center align-item-center flex-direction-column text-center">
              <font-awesome-icon class="tc-purple fs-50" :icon="['fas', 'stethoscope']" />              <h1 class="t-margin-0">
                Maior Grupo
              </h1>
              <p class="t-margin-2">
                Somos o maior grupo do mercado, contemplamos o maior números de especialidades médicas acessíveis.
              </p>
            </div>
          </div>
        </div>
      </div>


    </main>

    <footer>

    </footer>
  </div>
</template>
