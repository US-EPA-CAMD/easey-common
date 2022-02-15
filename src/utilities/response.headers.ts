import { Request } from 'express';

export class ResponseHeaders {
  public static setPagination(
    req: Request,
    page: number,
    perPage: number,
    totalCount: number,
  ) {
    let concatLinks: string;

    if (page && perPage) {
      const totalPages = Math.ceil(totalCount / perPage);

      if (totalPages > 1) {
        const pageParam = `page=${page}`;

        let url = req.url.replace(pageParam, 'page=1');
        const first = `<${url}>; rel="first"`;

        url = req.url.replace(pageParam, `page=${page - 1}`);
        const prev = `<${url}>; rel="previous"`;

        url = req.url.replace(pageParam, `page=${page + 1}`);
        const next = `<${url}>; rel="next"`;

        url = req.url.replace(pageParam, `page=${totalPages}`);
        const last = `<${url}>; rel="last"`;

        switch (page) {
          case 1: {
            concatLinks = `${next},${last}`;
            break;
          }
          case totalPages: {
            concatLinks = `${first},${prev}`;
            break;
          }
          default: {
            concatLinks = `${first},${prev},${next},${last}`;
            break;
          }
        }

        req.res.setHeader('Link', concatLinks);
        req.res.setHeader('X-Total-Count', totalCount);
      }
    }
  }
}
