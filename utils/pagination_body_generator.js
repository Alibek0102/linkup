const PaginationBodyGenerator = ({ count, page, perPage }) => {
    return {
        total: count,
        current_page: page,
        per_page: perPage
    }
}

export default PaginationBodyGenerator;