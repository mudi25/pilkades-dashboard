import { ListLokasi, AddLokasi, UpdateLokasi, Lokasi } from "./proto/core_pb";

export interface LookupModel {
  [key: string]: string;
}
export const lookupParent = (value: ListLokasi) =>
  value.getItemsList().reduce((acc, current) => {
    acc[current.getId()] = current.getNama();
    return acc;
  }, {} as LookupModel);

export const listLokasi = (value: ListLokasi) =>
  value.getItemsList().map((it) => it.toObject());
export const addLokasi = (value: AddLokasi.AsObject) =>
  new AddLokasi().setIdparent(value.idparent).setNama(value.nama);
export const updateLokasi = (
  valueOld: Lokasi.AsObject,
  valueNew: Lokasi.AsObject
) => new UpdateLokasi().setId(valueOld.id).setNama(valueNew.nama);

export const deleteokasi = (value: Lokasi.AsObject) =>
  new Lokasi().setId(value.id).setIdparent(value.idparent).setNama(value.nama);
