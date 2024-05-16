import cx from 'classnames';
import { Component} from 'react';

export default class LikeButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            likes: 100,
            liked: false
            };
        }
        handleClick =() => {
            if(this.state.liked === false) {
            this.setState(
                {
                    likes: this.state.likes + 1,
                    liked: true
                })
            } else {
                this.setState(
                    {
                        likes: this.state.likes - 1,
                        liked: false
                    }
                )
            }
        }
    render() {
        return (
            <>
                <div>
                    <button
                        className={cx("like-button", {'liked': this.state.liked})}
                        onClick={this.handleClick}>
                        Like | <span className="likes-counter">{this.state.likes}</span>
                    </button>
                </div>
                <style>{`
                    .like-button {
                        font-size: 1rem;
                        padding: 5px 10px;
                        color:  #585858;
                    }
                   .liked {
                        font-weight: bold;
                        color: #1565c0;
                   }
                `}</style>
            </>
        );
    }
}
