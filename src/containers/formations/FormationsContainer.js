import { connect } from 'react-redux'
import { removeForma, sauvegarderForma } from '../../actions';
import FormasPages from '../../components/formations/FormationsPages';

const getFormasList = (formas) => {  
  return formas    
}

const getFormationToDisplay = (formas, idForma) => { 
  var formaSelected = {id: "", name:"", desc:""};

  if (idForma) {
    var formaListSelected =  formas.filter(forma => {
      return forma.id === idForma
    });

    formaSelected = formaListSelected[0] ? formaListSelected[0] : null
  }

  return formaSelected
}

const mapStateToProps = (state, ownProps) => ({
  formas: getFormasList(state.formas.formas),
  forma: getFormationToDisplay(state.formas.formas, ownProps.formaId),
  displayPage: ownProps.displayPage ? ownProps.displayPage : "list"
})

const mapDispatchToProps = dispatch => ({
  sauvegarderForma: (id, name, desc) => dispatch(sauvegarderForma(id, name, desc)),
  removeForma: id => dispatch(removeForma(id))
})

export default connect(mapStateToProps, mapDispatchToProps)(FormasPages);