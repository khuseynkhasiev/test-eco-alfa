import { memo } from "react";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";
import "./pagination.css";
import { useDispatch, useSelector } from "react-redux";
import { setCurrentPage } from "../../../app/features/movies/moviesSlice";
import { RootState } from "../../../app/store";

export const PaginationOutlined = memo(() => {
    const dispatch = useDispatch();
    const { page, total } = useSelector((state: RootState) => state.movies);

    const handlePageChange = (page: number) => {
        dispatch(setCurrentPage(page));
    };

    return (
        <Stack spacing={2}>
            <Pagination
                count={total}
                page={page}
                onChange={() => handlePageChange}
                variant="outlined"
                size="large"
                sx={{
                    padding: "20px 0",
                    "& .css-wjh20t-MuiPagination-ul": {
                        justifyContent: "center",
                    },
                    "& .css-ax94ij-MuiButtonBase-root-MuiPaginationItem-root": {
                        color: "#FFF",
                        borderColor: "#FFF",
                    },
                }}
            />
        </Stack>
    );
});
