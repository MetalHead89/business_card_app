import './InfoItem.scss';

type InfoItemType = {
  name: string;
  text: string;
};

function InfoItem({ name, text }: InfoItemType) {
  return (
    <div className="info-item">
      <span className="info-item__name">{name}</span>{' '}
      <span className="info-item__text">{text}</span>
    </div>
  );
}

export default InfoItem;
export type { InfoItemType };
