import React, {Component} from 'react'
import './Card.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


class Card extends Component{  
    
    render(){
        
        return(
            <div className='wrapper'>
                <div className='profile-card'>
                <div className="top-section">
                    <div className='avatar'>
                        <img src={this.props.imgurl} alt=''></img>
                    </div>
                    <div className='name'>{this.props.fname} {this.props.lname}
                    </div>
                    <div className='handle'>@{this.props.handle}</div>
                </div>
                <div className='bottom-section'>
                <div class="link">
                    <a href={`https://codeforces.com/profile/${this.props.handle}`}><FontAwesomeIcon icon='user' className='i' color='aqua' /></a>
                </div>
                    <div class="country">{this.props.country} <span>Country</span></div>
                    <div class="border"></div>
                    <div class="Rating">{this.props.rating} <span>Rating</span></div>
                    <div class="border"></div>
                    <div class="rank">{this.props.rank} <span>Rank</span></div>
                 </div>   
            </div>

            </div>
        )
    }
}

export default Card


