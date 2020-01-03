# Roadworks tile layer for Baden-Württemberg

This provides a Mapbox vector tile layer returning roadworks features in 
the German state of Baden-Württemberg.

## Configuration

The following configuration options are available as environment variables:

- `MAX_ZOOM`: default is 20
- `ROADWORKS_API_URL`: default is `https://baustellen.strassen.baden-wuerttemberg.de/bis_wfs/wfs?VERSION=1.0.0&typeName=bis:Baustelle&request=GetFeature&outputFormat=json`

Overriding the API URL is useful because it seems that the server providing
the source data is blocked by the Travis CI build hosts. This can be worked 
around by providing a different URL.

