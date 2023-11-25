import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import ProdName from "../component/dashboard/updates/productsName";
import ProdPrice from "../component/dashboard/updates/productsPrice";
import ProdAvil from "../component/dashboard/updates/productsAvil";
import ProdLocation from "../component/dashboard/updates/productsLocation";
import ProdStatus from "../component/dashboard/updates/productsStatus";
import ProdDescription from "../component/dashboard/updates/productsDes";
import ProdKeyword from "../component/dashboard/updates/productsKeyword";
import ProdImg from "../component/dashboard/updates/productsImg";

const EditModal = (props: any) => {
  const style = {
    position: "absolute" as "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  return (
    <>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="child-modal-title"
        aria-describedby="child-modal-description"
      >
        <Box sx={{ ...style, width: 200 }}>
          <form className="container">
            <ProdName />
            <ProdPrice />
            <ProdAvil />
            <ProdLocation />
            <ProdStatus />
            <ProdDescription />
            <ProdKeyword />
            <ProdImg />
          </form>
          <Button onClick={() => window.location.reload()}>تاكيد</Button>
        </Box>
      </Modal>
    </>
  );
};

export default EditModal;
