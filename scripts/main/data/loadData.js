
export function LoadBusinessesData () {
  const promise = fetch('../../backend/businesses.json')
    .then(response => {
      return response.json();
    }).then((businesses) => {
      let businessHTML = '';
      
      businesses.forEach((business) => {
        businessHTML += `
        <div class="business-card js-business-detail">
          <img src="${business.image.logo}" alt="Computer Greeks Logo" class="card-img">
          <div class="business-info">
            <div class="business-name-rating">
              <h3>${business.name}</h3>
              <span class="rating">⭐ ${business.rating.toFixed(1)}</span>
            </div>
            <p>${business.description.brief}</p>
          </div>
        </div>
      `;
      });

      // Inject generated cards into the DOM
      document.querySelector('.js-business-card-grid').innerHTML = businessHTML;
    }).catch (() => {
      console.log('Unexpected error, please try agian ')
    })

    return promise;
}
