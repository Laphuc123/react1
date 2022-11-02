import icon from '../../../images/menu.png';
import React from 'react'
import './Menu.css'
class Menu1 extends React.Component{
  constructor(props){
      super(props);
      this.state = {
        showMenu: true
      };
      this.removeMenu=this.removeMenu.bind()
  }
  removeMenu(){
    console.log('aaa');
    this.setState({
      showMenu: !this.state.showMenu
    });
  }
  render() {
    return (
      <div>
        <div className='sm:hidden'>
            <ul className='block'>
                <li className='inline-block'>
                <button className="" onClick={this.removeMenu}><img src={icon} alt=""></img></button>
                    <div className={this.state.showMenu?'dropdown_content hidden ':'dropdown_content block'}>
                        <a>
                            <div>
                                <p className='text-[18px] fonr-[400] text-[#272D38] hover:text-[#8EADD5]'>home</p>
                            </div>
                        </a>
                        <hr></hr>
                        <a>
                            <div>
                                <p className='text-[18px] fonr-[400] text-[#272D38] hover:text-[#8EADD5]'>About</p>
                            </div>
                        </a>
                        <hr></hr>
                        <a>
                            <div>
                                <p className='text-[18px] fonr-[400] text-[#272D38] hover:text-[#8EADD5]'>Testimonials</p>
                            </div>
                        </a>
                        <hr></hr>
                        <a>
                            <div>
                                <p className='text-[18px] fonr-[400] text-[#272D38] hover:text-[#8EADD5]'>contact</p>
                            </div>
                        </a>
                    </div>
                </li>
            </ul>
        </div>
        <div>
        <div class="hidden sm:block">
                <div class="flex justify-center items-center gap-x-10">
                    <div>
                        <a href="#"><p className="text-[18px] fonr-[400] text-[#272D38] hover:text-[#8EADD5]">home</p></a>
                    </div>
                    <div>
                        <a href="#"><p className="text-[18px] fonr-[400] text-[#272D38] hover:text-[#8EADD5]">About</p></a>
                    </div>
                    <div>
                        <a href="#"><p className="text-[18px] fonr-[400] text-[#272D38] hover:text-[#8EADD5]">Testimonials</p></a>
                    </div>
                    <div>
                        <a href="#"><p className="text-[18px] fonr-[400] text-[#272D38] hover:text-[#8EADD5]">contact</p></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
  }
}
export default Menu1