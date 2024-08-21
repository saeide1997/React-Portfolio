

const PortfolioList = ({id, title, active, setSelected}) => {
    return (
        <li className={'text-[18px] ml-12 p-2 rounded-lg cursor-pointer justify-center items-center' + (active && ' pListActive')}
        onClick={()=>setSelected(id)}>
            {title}
            </li>
    );
};

export default PortfolioList;