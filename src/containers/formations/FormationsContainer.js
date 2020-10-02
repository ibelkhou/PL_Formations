import { connect } from 'react-redux'
import { removeForma, sauvegarderForma } from '../../actions';
import FormasPages from '../../components/formations/FormationsPages';

const getFormasList = (formas) => {  
  return formas    
}

const getFormationToDisplay = (formas, idForma) => { 
  var formaSelected =  formas.filter(forma => {
    return forma.id === idForma
  });

  return formaSelected[0] ? formaSelected[0] : null
}

const mapStateToProps = (state, ownProps) => ({
  formas: getFormasList(state.formas.formas),
  forma: getFormationToDisplay(state.formas.formas, ownProps.formaId),
  formaId: ownProps.formaId ? ownProps.formaId : ""
})

const mapDispatchToProps = dispatch => ({
  sauvegarderForma: (id, name, desc) => dispatch(sauvegarderForma(id, name, desc)),
  removeForma: id => dispatch(removeForma(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(FormasPages);