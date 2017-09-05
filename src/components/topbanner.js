import React from 'react';
import { render } from 'react-dom';
import Banneritem from './bannerItem';
const Topbanner = React.createClass({
	componentWillMount() {
			
	},
	render(){
		return(
			<div className="topbanner">
				<Banneritem 
				name='个人亲子鉴定1' 
				dis='了解血缘关系  匿名检测  保护隐私' 
				pc1='2180' pc2='原价：￥2400'/>
				<Banneritem 
				name='上户口亲子鉴定' 
				dis='派出所上户需要亲子鉴定报告<br>具备司法效力' 
				pc1='2800' pc2='原价：￥3000'/>
				<Banneritem 
				name='无创产前亲子鉴定' 
				dis='只需要准妈妈外周血<br>无痛苦、无创取样' 
				pc1='6800' pc2='非抽羊水'/>
				<Banneritem 
				name='笔迹印章咨询' 
				dis='判断笔迹真伪、评估形成相对时间<br>人多笔痕一致' 
				pc1='500' pc2='出具咨询报告'/>
				<Banneritem 
				name='伤残鉴定咨询' 
				dis='专业法医提供专业咨询意见' 
				pc1='10' pc2='出具咨询报告'/>
			</div>
			)
	}
})
export default Topbanner;