import { Router } from "express";
import { IRouteConfig } from "../../interfaces";
import { authMiddleware } from "../middlewares";
import { Roles } from "../../constants";
import { SuatAnController } from "./suat-an.controller";

export const SuatAnRoutes = (config: IRouteConfig): Router => {
    const router = Router();
    const controller =  new SuatAnController(config);
    // const adminRequired = authMiddleware({
    //     role: Roles.Admin,
    //     token: config.contrib.token,
    //     userService: config.services.userService
    // });
    // router.post("/", adminRequired, controller.create.bind(controller));
    // router.put("/:id", adminRequired, controller.updateById.bind(controller));
    // router.delete("/:id", adminRequired, controller.delete.bind(controller));

    const tokenRequired = authMiddleware({
        role: Roles.User,
        token: config.contrib.token,
        userService: config.services.userService
    });
    router.use(tokenRequired);
    router.post("/get-suat-an", controller.getSuatAn.bind(controller));
    router.get("/get-all-suat-an", controller.gettAllSuatAn.bind(controller));
    router.get("/get-one-suat-an/:id", controller.getOneSuatAnById.bind(controller));
    router.post("/tao-suat-an", controller.taoSuatAn.bind(controller));
    router.put("/update-suat-an", controller.updateSuatAn.bind(controller));
    router.delete("/delete-suat-an", controller.deleteSuatAn.bind(controller));
    router.post("/getLatlng", controller.getLatlng.bind(controller));
    router.post("/binh-luan-suat-an", controller.binhLuanSuatAn.bind(controller));
    router.get("/request-an-cung/:id", controller.requestAnCung.bind(controller));
    router.post("/duyet-an-cung", controller.duyetAnCung.bind(controller))
    return router;
};
