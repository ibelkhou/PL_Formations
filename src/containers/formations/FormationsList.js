import { connect } from 'react-redux'
import { addForma, displayForma, removeForma } from '../../actions';
import FormasList from '../../components/formations/FormasListComponent';

const getFormasList = (formas) => {  
  return formas    
}

const mapStateToProps = state => ({
  formas: getFormasList(state.formas.formas)
})

const mapDispatchToProps = dispatch => ({
  displayForma: id => dispatch(displayForma(id)),
  addForma: (name, desc) => dispatch(addForma(name, desc)),
  removeForma: id => dispatch(removeForma(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(FormasList);