function setupComments(issueId){
  $('#discussion_comment').attr('href', 'https://github.com/SinaSadeghi83/sinasadeghi83.github.io/issues/'+issueId);
  const GH_API_URL = 'https://api.github.com/repos/sinasadeghi83/sinasadeghi83.github.io/issues/'+issueId+'/comments';

  let request = new XMLHttpRequest();
  request.open( 'GET', GH_API_URL, true );
  request.onload = function() {
  	if ( this.status >= 200 && this.status < 400 ) {
  		let response = JSON.parse( this.response );

  		for ( var i = 0; i < response.length; i++ ) {
  			document.getElementById( 'gh-comments-list' ).appendChild( createCommentEl( response[ i ] ) );
  		}

  		if ( 0 === response.length ) {
  			document.getElementById( 'no-comments-found' ).style.display = 'block';
  		}
  	} else {
  		console.error( this );
  	}
  };

  function createCommentEl( response ) {
  	let user = document.createElement( 'a' );
  	user.setAttribute( 'href', response.user.url.replace( 'api.github.com/users', 'github.com' ) );
  	user.classList.add( 'user' );

  	let userAvatar = document.createElement( 'img' );
  	userAvatar.classList.add( 'avatar' );
  	userAvatar.setAttribute( 'src', response.user.avatar_url );

  	user.appendChild( userAvatar );

  	let commentLink = document.createElement( 'a' );
  	commentLink.setAttribute( 'href', response.html_url );
  	commentLink.classList.add( 'comment-url' );
  	commentLink.innerHTML = '#' + response.id + ' - ' + response.created_at;

  	let commentContents = document.createElement( 'div' );
  	commentContents.classList.add( 'comment-content' );
  	commentContents.innerHTML = response.body;

  	let comment = document.createElement( 'li' );
  	comment.setAttribute( 'data-created', response.created_at );
  	comment.setAttribute( 'data-author-avatar', response.user.avatar_url );
  	comment.setAttribute( 'data-user-url', response.user.url );

  	comment.appendChild( user );
  	comment.appendChild( commentContents );
  	comment.appendChild( commentLink );

  	return comment;
  }
  request.send();

}
