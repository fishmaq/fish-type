import { inject, Service } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { TypeText } from '../../models/type-text';

@Service()
export class TypeTextService {
  #httpClient = inject(HttpClient);
  #endpointUrl = '/api/';

  getData() {
    return this.#httpClient.get<TypeText[]>(this.#endpointUrl);
  }

  updateData(data: TypeText) {
    return this.#httpClient.put(this.#endpointUrl, data);
  }
}
