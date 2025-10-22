import { COMPANY_INFO } from '@/lib/constants';

export const metadata = {
  title: 'Mentions Légales | SP2C Plomberie Arles',
  description: 'Mentions légales du site SP2C Plomberie Chauffage Climatisation',
};

export default function MentionsLegalesPage() {
  return (
    <div className="py-20 bg-gray-50">
      <div className="container mx-auto px-4 max-w-4xl">
        <h1 className="text-h2 text-primary mb-8">Mentions Légales</h1>

        <div className="bg-white rounded-2xl p-8 shadow-lg space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              1. Informations Légales
            </h2>
            <div className="text-gray-700 space-y-2">
              <p>
                <strong>Raison sociale :</strong> {COMPANY_INFO.name}
              </p>
              <p>
                <strong>SIRET :</strong> {COMPANY_INFO.siret}
              </p>
              <p>
                <strong>Adresse :</strong> {COMPANY_INFO.address.city},{' '}
                {COMPANY_INFO.address.postalCode}
              </p>
              <p>
                <strong>Téléphone :</strong> {COMPANY_INFO.phone}
              </p>
              <p>
                <strong>Email :</strong> {COMPANY_INFO.email}
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              2. Directeur de Publication
            </h2>
            <p className="text-gray-700">
              Le directeur de la publication est le représentant légal de
              l'entreprise.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">3. Hébergement</h2>
            <div className="text-gray-700 space-y-2">
              <p>
                <strong>Hébergeur :</strong> Vercel Inc.
              </p>
              <p>
                <strong>Adresse :</strong> 340 S Lemon Ave #4133, Walnut, CA 91789,
                USA
              </p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              4. Propriété Intellectuelle
            </h2>
            <p className="text-gray-700">
              L'ensemble de ce site relève de la législation française et
              internationale sur le droit d'auteur et la propriété intellectuelle.
              Tous les droits de reproduction sont réservés, y compris pour les
              documents téléchargeables et les représentations iconographiques et
              photographiques.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              5. Données Personnelles
            </h2>
            <p className="text-gray-700 mb-4">
              Conformément à la loi &quot;Informatique et Libertés&quot; du 6
              janvier 1978 modifiée et au Règlement Général sur la Protection des
              Données (RGPD), vous disposez d'un droit d'accès, de rectification et
              de suppression des données vous concernant.
            </p>
            <p className="text-gray-700">
              Pour exercer ces droits, vous pouvez nous contacter à l'adresse
              suivante : {COMPANY_INFO.email}
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              6. Cookies
            </h2>
            <p className="text-gray-700">
              Ce site n'utilise pas de cookies de tracking. Seuls des cookies
              techniques nécessaires au bon fonctionnement du site peuvent être
              utilisés.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-primary mb-4">
              7. Limitation de Responsabilité
            </h2>
            <p className="text-gray-700">
              {COMPANY_INFO.name} ne pourra être tenu responsable des dommages
              directs et indirects causés au matériel de l'utilisateur, lors de
              l'accès au site, et résultant soit de l'utilisation d'un matériel ne
              répondant pas aux spécifications indiquées, soit de l'apparition d'un
              bug ou d'une incompatibilité.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
