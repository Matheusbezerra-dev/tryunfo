import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
  render() {
    const { cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;
    return (
      <div>
        <form>
          <label htmlFor="name">
            Nome
            <input
              name="cardName"
              type="text"
              id="name"
              data-testid="name-input"
              value={ cardName }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="description">
            Descrição
            <textarea
              name="cardDescription"
              id="description"
              data-testid="description-input"
              value={ cardDescription }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr1">
            Attr01
            <input
              name="cardAttr1"
              type="number"
              id="attr1"
              data-testid="attr1-input"
              value={ cardAttr1 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr2">
            Attr02
            <input
              name="cardAttr2"
              type="number"
              id="attr2"
              data-testid="attr2-input"
              value={ cardAttr2 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="attr3">
            Attr03
            <input
              name="cardAttr3"
              type="number"
              id="attr3"
              data-testid="attr3-input"
              value={ cardAttr3 }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="image">
            imagem
            <input
              name="cardImage"
              type="text"
              id="image"
              data-testid="image-input"
              value={ cardImage }
              onChange={ onInputChange }
            />
          </label>

          <label htmlFor="rare">
            Raridade:
            <select
              name="cardRare"
              id="rare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option value="normal">Normal</option>
              <option value="raro">Raro</option>
              <option value="muito raro">Muito raro</option>
            </select>
          </label>

          <label htmlFor="trunfo">
            Super Trybe Trunfo
            <input
              name="cardTrunfo"
              type="checkbox"
              id="trunfo"
              data-testid="trunfo-input"
              checked={ cardTrunfo }
              onChange={ onInputChange }
            />
          </label>
          <button
            name="isSaveButtonDisabled"
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </div>
    );
  }
}

export default Form;

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
  // hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};
