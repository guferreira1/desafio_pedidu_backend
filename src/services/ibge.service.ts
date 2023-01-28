import { ibgeRepository } from "../repositories/ibge.repository";

export class IbgeService {
  async getExternalApi() {
    const response = await fetch(
      "http://servicodados.ibge.gov.br/api/v1/localidades/estados/33/municipios"
    ).then((res) => res.json());

    for (let i = 0; i < response.length; i++) {
      const ibge = await ibgeRepository.findOneBy({ ibge_id: response[i].id });

      if (ibge) {
        await ibgeRepository.update(response[i].id, {
          ibge_id: response[i].id,
          ibge_name: response[i].nome,
        });
      }

      const newCounty = ibgeRepository.create({
        ibge_id: response[i].id,
        ibge_name: response[i].nome,
      });

      await ibgeRepository.save(newCounty);
    }

    return response;
  }
}
