import React from 'react';
import './style.css'
import photo from '../../assets/images/phtography.png';
import creativ from '../../assets/images/creativity.png';
import web from '../../assets/images/web.png';

// import styled from "styled-components";

    
class ServiceIntro extends React.Component{

    constructor(props) {
        super(props);
        // this.dropDown = this.dropDown.bind(this);
        this.state = {
            navs: [
                { name: 'Photography', id: 1, src: photo, text: "1Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
                { name: 'Creativity', id: 2, src: creativ, text: "2Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."},
                { name: 'WEB Design', id: 3, src: web, text: "3Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}                
            ],
            showId: 1,
        }
      }
    
      dropDown = ( id ) => {
        this.setState( { showId: id } );
      }

    //   const Nav = styled.nav`
    //         width: 600px;
    //         margin-bottom: 10px;
    //   `;
       
      renderLogoNameText = () => (
          this.state.navs.map( ( nav ) => (
            <nav key = { nav.id } className ='intro-nav'>
                <div className ='logo-h'>
                    <img src = { nav.src }></img>
                    <div> { nav.name } </div>
                    <button className ='drop-arrow' onClick ={ () => this.dropDown(nav.id) }>&#8657;</button>
                </div>
                { this.state.showId == nav.id && 
                    <div className ="scroll">
                        <p> { nav.text } </p>
                    </div>       
                    //   context: "&#8659;" ;                       
                }
            </nav>
        ))
      )

    render(){
        return(
            <div className='ServiceIntro'>
                { this.renderLogoNameText() }
            </div>  
        )
    }
}

export default ServiceIntro