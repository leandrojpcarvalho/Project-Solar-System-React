type Props = {
  headline:string;
};

function Title({ headline } : Props) {
  return <h2>{ headline }</h2>;
}

export default Title;
