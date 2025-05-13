import edit from "../images/Edit.png";
import avatarProfile from "../images/avatarProfile.png";
import "./Profile.css";

function Profile() {
	return (
		<>
			<section className="section">
				<aside className="aside">
					<div className="edit">
						<img src={avatarProfile} alt="imageProfile" />
						<img src={edit} alt="bouttonEdit" />
					</div>
					<div className="description">
						<h1>Nom de l'utilisateur</h1>
					</div>
					<div className="descriptionParagraphe">
						<p>Membre depuis X</p>
						<p>Description de l'utilisateur :</p>
						<p>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
							auctor ut justo dapibus sollicitudin. Donec dignissim purus
							ligula, eget fermentum.
						</p>
					</div>
				</aside>
				<article className="box">
					<div className="titre">
						<h1>INFORMATIONS DU COMPTE</h1>
					</div>
					<form
						action="/ma-page-de-traitement"
						method="post"
						className="formulaire"
					>
						<div className="mail">
							<label htmlFor="mail">Adresse mail du compte :</label>
							<input
								type="email"
								id="mail"
								name="user_mail"
								placeholder="Adresse mail"
							/>
							<p>
								<b>Changer l'email</b>
							</p>
						</div>
						<div className="password">
							<label htmlFor="mdp">Mot de passse :</label>
							<input
								type="mdp"
								id="mdp"
								name="user_mdp"
								placeholder="Mot de passe"
							/>
							<p>
								<b>Modifier mon mot de passe</b>
							</p>
						</div>
					</form>
					<div className="checkbox">
						<label>
							<input type="checkbox" name="newsletter" />
							J’accepte de recevoir par e-mail les offres et newsletters
							d’informations de MayAnime
						</label>
						<label>
							<input type="checkbox" name="conditionGénérales" value="Oui" />
							J’accepte les conditions générales d’utilisation
						</label>
					</div>
				</article>
			</section>
		</>
	);
}

export default Profile;
