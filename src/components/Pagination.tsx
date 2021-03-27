interface PaginationProps {
  perPage: number;
  total: any;
}

const Pagination: React.FC<PaginationProps> = ({ perPage, total }) => {
  const pagesNumber = [];

  for (let i = 1; i <= Math.ceil(total / perPage); i++) {
    pagesNumber.push(i);
  }

  return (
    <ul className="pageintion-list">
      {pagesNumber.slice(20, total).map((number: number) => (
        <li key={number}>{number}</li>
      ))}
    </ul>
  );
};

export default Pagination;
