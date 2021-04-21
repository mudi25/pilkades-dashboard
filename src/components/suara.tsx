import React from "react";
import Grid from "@material-ui/core/Grid";
import { Perhitungan } from "../proto/core_pb";
interface ImageTextProps {
  url: string;
  text: number | string;
  percent?: number;
}
const ImageText: React.FunctionComponent<ImageTextProps> = ({
  url,
  text,
  percent,
}) => {
  return (
    <div>
      <img
        src={url}
        width={100}
        height={100}
        style={{
          display: "block",
          marginLeft: "auto",
          marginRight: "auto",
        }}
        alt={url}
      />
      <span>
        <h2 style={{ color: "white", textAlign: "center" }}>{text}</h2>
        <h2 style={{ color: "white", textAlign: "center" }}>
          {Number(percent) ? Number(percent).toFixed(1) + " %" : ""}
        </h2>
      </span>
    </div>
  );
};
const ComponentSuara: React.FunctionComponent<Perhitungan.AsObject> = (
  props
) => {
  return (
    <div
      style={{
        background: "linear-gradient(to right bottom, #009245, #0071BC)",
      }}
    >
      <Grid container spacing={8} justify="center">
        <Grid item xs={12}>
          <h2 style={{ color: "white", textAlign: "center" }}>Real Count</h2>
        </Grid>
        <Grid item xs={3}>
          <ImageText
            url="/1.png"
            text={props.nomorurut1}
            percent={
              Number((props.nomorurut1 / props.penggunahakpilihtotal) * 100) ||
              0
            }
          />
        </Grid>
        <Grid item xs={3}>
          <ImageText
            url="/2.png"
            text={props.nomorurut2}
            percent={
              Number((props.nomorurut2 / props.penggunahakpilihtotal) * 100) ||
              0
            }
          />
        </Grid>
        <Grid item xs={3}>
          <ImageText
            url="/3.png"
            text={props.nomorurut3}
            percent={
              Number((props.nomorurut3 / props.penggunahakpilihtotal) * 100) ||
              0
            }
          />
        </Grid>
        <Grid item xs={3}>
          <ImageText
            url="/4.png"
            text={props.nomorurut4}
            percent={
              Number((props.nomorurut4 / props.penggunahakpilihtotal) * 100) ||
              0
            }
          />
        </Grid>

        <Grid item xs={12}>
          <h3 style={{ color: "white", textAlign: "center" }}>
            Pengguna Hak Pilih
          </h3>
        </Grid>
        <Grid item xs={4}>
          <ImageText
            url="/l.png"
            text={props.penggunahakpilihlaki}
            percent={
              Number((props.penggunahakpilihlaki / props.pemilihlaki) * 100) ||
              0
            }
          />
        </Grid>
        <Grid item xs={4}>
          <ImageText
            url="/p.png"
            text={props.penggunahakpilihperempuan}
            percent={
              Number(
                (props.penggunahakpilihperempuan / props.pemilihperempuan) * 100
              ) || 0
            }
          />
        </Grid>
        <Grid item xs={4}>
          <ImageText
            url="/totalPemilih.png"
            text={props.penggunahakpilihtotal}
            percent={
              Number(
                (props.penggunahakpilihtotal / props.pemilihtotal) * 100
              ) || 0
            }
          />
        </Grid>
        <Grid item xs={12}>
          <h3 style={{ color: "white", textAlign: "center" }}>TPS Dan Suara</h3>
        </Grid>

        <Grid item xs={3}>
          <ImageText
            url="/suaraSah.png"
            text={props.suarasah}
            percent={
              Number((props.suarasah / props.penggunahakpilihtotal) * 100) || 0
            }
          />
        </Grid>
        <Grid item xs={3}>
          <ImageText
            url="/suaraTidakSah.png"
            text={props.suaratidaksah}
            percent={
              Number(
                (props.suaratidaksah / props.penggunahakpilihtotal) * 100
              ) || 0
            }
          />
        </Grid>

        <Grid item xs={3}>
          <ImageText
            url="/tpsMasuk.png"
            text={props.tpsmasuk}
            percent={Number((props.tpsmasuk / props.totaltps) * 100) || 0}
          />
        </Grid>
        <Grid item xs={3}>
          <ImageText url="/totalTps.png" text={props.totaltps} />
        </Grid>

        <Grid item xs={12}>
          <h3 style={{ color: "white", textAlign: "center" }}>Pemilih</h3>
        </Grid>
        <Grid item xs={4}>
          <ImageText url="/l.png" text={props.pemilihlaki} />
        </Grid>
        <Grid item xs={4}>
          <ImageText url="/p.png" text={props.pemilihperempuan} />
        </Grid>
        <Grid item xs={4}>
          <ImageText url="/totalPemilih.png" text={props.pemilihtotal} />
        </Grid>
      </Grid>
    </div>
  );
};

export default ComponentSuara;
