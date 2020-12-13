import React, { Component } from 'react';
import './Navbar.css';
import Dropdown from './Dropdown';
import DropdownItem from './Dropdown/DropdownItem';


class Navbar extends Component {

    constructor(props) {
        super(props)
        this.state = {
            bars_clicked: false,
            profile_clicked: false,
            rae_clicked: false,
            teacher_clicked: false,
            institution_clicked: false
        }
    }

    handleClickBar = () => {
        this.setState({ bars_clicked: !this.state.bars_clicked })
    }
    handleClickProfile = () => {
        this.setState({ profile_clicked: !this.state.profile_clicked })
    }
    handleClickRae = () => {
        this.setState({ rae_clicked: !this.state.rae_clicked })
    }
    handleClickTeacher = () => {
        this.setState({ teacher_clicked: !this.state.teacher_clicked })
    }
    handleClickInstitution = () => {
        this.setState({ institution_clicked: !this.state.institution_clicked })
    }

    render() {
        return(
            <nav className='NavbarItems'>
                <div className='menu-icon' onClick={this.handleClickBar}>
                    <i className={this.state.bars_clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={this.state.bars_clicked ? 'nav-menu active' : 'nav-menu'}>

                    <li className='listItem' id='major'><a className='nav-link' href='#overview'>Overview</a></li>

                    <li className='listItem' id='major'><a href='#student_profile' onClick={this.handleClickProfile} className={this.state.profile_clicked ? 'nav-link-active' : 'nav-link'}>Perfil do Respondente</a></li>
                    <Dropdown className={this.state.profile_clicked ? 'drop-menu active' : 'drop-menu'}>
                        <DropdownItem href='#quant_students'>Quantidade de Respondentes</DropdownItem>
                    </Dropdown>

                    <li className='listItem' id='major'><a href='#about_rae' onClick={this.handleClickRae} className={this.state.rae_clicked ? 'nav-link-active' : 'nav-link'}>Sobre RAE</a></li>
                    <Dropdown className={this.state.rae_clicked ? 'drop-menu active' : 'drop-menu'}>
                        <DropdownItem href='#vac_offered'>Vagas Ofertadas</DropdownItem>
                        <DropdownItem href='#courses_taken'>Disciplinas Cursadas</DropdownItem>
                        <DropdownItem href='#general_opinion'>Opinião Geral</DropdownItem>
                        <DropdownItem href='#rae_performance'>Desempenho no RAE</DropdownItem>
                        <DropdownItem href='#teaching_quality'>Qualidade do Ensino</DropdownItem>
                        <DropdownItem href='#mental_health'>Saúde Mental</DropdownItem>
                        <DropdownItem href='#technical_difficulties'>Dificuldades Técnicas</DropdownItem>
                        <DropdownItem href='#performance impact'>Impacto das Dificuldades</DropdownItem>
                    </Dropdown>

                    <li className='listItem' id='major'><a href='#about_teacher' onClick={this.handleClickTeacher} className={this.state.teacher_clicked ? 'nav-link-active' : 'nav-link'}>Sobre Professores</a></li>
                    <Dropdown className={this.state.teacher_clicked ? 'drop-menu active' : 'drop-menu'}>
                        <DropdownItem href='#teacher_tolerance'>Tolerância dos Professores</DropdownItem>
                        <DropdownItem href='#performance_teachers'>Atuação dos Professores</DropdownItem>
                        <DropdownItem href='#individual_service'>Atendimento Individual</DropdownItem>
                        <DropdownItem href='#teacher_requirement'>Exigência dos Professores</DropdownItem>
                        <DropdownItem href='#volume_activities'>Volume de Atividades no RAE</DropdownItem>
                        <DropdownItem href='#about_activities'>Sobre essas Atividades</DropdownItem>
                    </Dropdown>

                    <li className='listItem' id='major'><a href='#about_institution' onClick={this.handleClickInstitution} className={this.state.institution_clicked ? 'nav-link-active' : 'nav-link'}>Sobre Instituição</a></li>
                    <Dropdown className={this.state.institution_clicked ? 'drop-menu active' : 'drop-menu'}>
                        <DropdownItem href='#ufcg_performance'>Avaliação da UFCG</DropdownItem>
                        <DropdownItem href='#coordination_performance'>Desempenho das Coordenações</DropdownItem>
                    </Dropdown>

                    <li className='listItem' id='major'><a className='nav-link' href='#metodologia'>Metodologia</a></li>
                </ul>
            </nav>
        )
    }
}

export default Navbar;