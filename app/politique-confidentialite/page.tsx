import { COMPANY_INFO } from '@/lib/constants';

export const metadata = {
  title: 'Politique de Confidentialité | SP2C Plomberie Arles',
  description:
    'Politique de confidentialité et protection des données personnelles',
};

export default function PolitiqueConfidentialitePage() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-h2 text-primary mb-8">
          Politique de Confidentialité
        </h1>

        <div className="bg-white rounded-2xl p-8 shadow-lg space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              1. Collecte des Données
            </h2>
            <p className="text-gray-700 mb-4">
              Nous collectons uniquement les données personnelles que vous nous
              fournissez volontairement via nos formulaires de contact et de demande
              de devis :
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Nom et prénom</li>
              <li>Adresse email</li>
              <li>Numéro de téléphone</li>
              <li>Code postal</li>
              <li>Informations sur votre projet (optionnel)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              2. Utilisation des Données
            </h2>
            <p className="text-gray-700 mb-4">
              Vos données personnelles sont utilisées exclusivement pour :
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Répondre à vos demandes de contact</li>
              <li>Établir et vous envoyer des devis</li>
              <li>Assurer le suivi de votre projet</li>
              <li>Vous informer de nos services (avec votre consentement)</li>
            </ul>
            <p className="text-gray-700 mt-4">
              <strong>Nous ne vendons ni ne partageons vos données avec des
              tiers.</strong>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              3. Conservation des Données
            </h2>
            <p className="text-gray-700">
              Vos données sont conservées pendant la durée nécessaire à la
              réalisation de votre projet, puis archivées conformément aux
              obligations légales (généralement 3 ans après la fin de la relation
              commerciale).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              4. Sécurité des Données
            </h2>
            <p className="text-gray-700">
              Nous mettons en œuvre toutes les mesures techniques et
              organisationnelles appropriées pour protéger vos données personnelles
              contre toute destruction, perte, altération, divulgation ou accès non
              autorisé.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              5. Vos Droits
            </h2>
            <p className="text-gray-700 mb-4">
              Conformément au RGPD, vous disposez des droits suivants :
            </p>
            <ul className="list-disc list-inside text-gray-700 space-y-2 ml-4">
              <li>Droit d'accès à vos données personnelles</li>
              <li>Droit de rectification de vos données</li>
              <li>Droit à l'effacement de vos données</li>
              <li>Droit à la limitation du traitement</li>
              <li>Droit à la portabilité de vos données</li>
              <li>Droit d'opposition au traitement</li>
            </ul>
            <p className="text-gray-700 mt-4">
              Pour exercer ces droits, contactez-nous à :{' '}
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="text-accent hover:underline font-semibold"
              >
                {COMPANY_INFO.email}
              </a>
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              6. Cookies
            </h2>
            <p className="text-gray-700">
              Notre site n'utilise pas de cookies publicitaires ou de tracking.
              Seuls des cookies techniques essentiels au fonctionnement du site
              peuvent être utilisés (session, préférences).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              7. Modifications
            </h2>
            <p className="text-gray-700">
              Nous nous réservons le droit de modifier cette politique de
              confidentialité à tout moment. Les modifications prendront effet dès
              leur publication sur cette page. Nous vous encourageons à consulter
              régulièrement cette page.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">8. Contact</h2>
            <p className="text-gray-700">
              Pour toute question concernant cette politique de confidentialité ou
              le traitement de vos données personnelles, vous pouvez nous contacter
              :
            </p>
            <div className="mt-4 text-gray-700 space-y-2">
              <p>
                <strong>Email :</strong>{' '}
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-accent hover:underline"
                >
                  {COMPANY_INFO.email}
                </a>
              </p>
              <p>
                <strong>Téléphone :</strong>{' '}
                <a
                  href={`tel:${COMPANY_INFO.phone}`}
                  className="text-accent hover:underline"
                >
                  {COMPANY_INFO.phoneDisplay}
                </a>
              </p>
              <p>
                <strong>Adresse :</strong> {COMPANY_INFO.address.city},{' '}
                {COMPANY_INFO.address.postalCode}
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
