import { Request, Response, NextFunction } from "express";
import { IRouteConfig, IUserService, CError, IUserQuery, IUserList, ISuatAnService, IPage } from "../../interfaces";

export class SuatAnController {
    private suatAnService: ISuatAnService;

    constructor(config: IRouteConfig) {
        this.suatAnService = config.services.suatAnService;
    }

    public async getSuatAn(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const search = req.body["search"] || '';
            const page = req.body["page"] || 1;
            const amount = req.body["amount"] || "10000";
            const sort = req.body["sort"] || "NguoiTao";
            const typesort = req.body["typesort"] || 1;
            const ipage: IPage = {
                search: search,
                page: page,
                amount: amount,
                sort: sort,
                typesort: typesort
            };
            ipage.amount = +ipage.amount;
            ipage.page = +ipage.page;
            console.log(req.body, "req.body");
            const result = await this.suatAnService.getSuatAn(req.body.user._id, ipage);
            res.json(result);
        } catch (err) {
            next(new CError(err.error || err, err.status));
        }
    }

    public async gettAllSuatAn(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const result = await this.suatAnService.gettAllSuatAn();
            res.json(result);
        } catch (err) {
            next(new CError(err.error || err, err.status));
        }
    }

    public async getOneSuatAnById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const result = await this.suatAnService.getOneSuatAnById(req.params.id);
            res.json(result);
        } catch (err) {
            next(new CError(err.error || err, err.status));
        }
    }

    public async taoSuatAn(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const result = await this.suatAnService.taoSuatAn(req.body);
            res.json(result);
        } catch (err) {
            next(new CError(err.error || err, err.status));
        }
    }

    public async updateSuatAn(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const result = await this.suatAnService.updateSuatAn();
            res.json(result);
        } catch (err) {
            next(new CError(err.error || err, err.status));
        }
    }

    public async deleteSuatAn(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const result = await this.suatAnService.deleteSuatAn();
            res.json(result);
        } catch (err) {
            next(new CError(err.error || err, err.status));
        }
    }

    public async requestAnCung(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const result = await this.suatAnService.requestAnCung(req.params.id, req.body);
            res.json(result);
        } catch (err) {
            next(new CError(err.error || err, err.status));
        }
    }

    public async getLatlng(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const result = await this.suatAnService.getLatlng(req.body.address);
            res.json(result);

        } catch (err) {
            next(new CError(err.error || err, err.status));
        }
    }

    public async binhLuanSuatAn(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const result = await this.suatAnService.binhLuanSuatAn(req.body);
            res.json(result);
        } catch (err) {
            next(new CError(err.error || err, err.status));
        }
    }

    public async duyetAnCung(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const result = await this.suatAnService.duyetAnCung(req.body);
            res.json(result);
        } catch (err) {
            next(new CError(err.error || err, err.status));
        }
    }
}
