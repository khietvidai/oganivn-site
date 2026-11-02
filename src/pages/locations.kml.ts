import type { APIRoute } from "astro";

export const GET: APIRoute = async () => {
	const kml = `<?xml version="1.0" encoding="UTF-8"?>
<kml xmlns="http://www.opengis.net/kml/2.2" xmlns:atom="http://www.w3.org/2005/Atom">
  <Document>
    <name>Locations for Ogani</name>
    <open>1</open>
    <Folder>
      <Placemark>
        <name><![CDATA[Ogani - TRUNG GIANG IMPORT-EXPORT CO., LTD]]></name>
        <description><![CDATA[Ogani - A Pioneer in Organic Agriculture. 69A Hiep Binh Street, Hiep Binh Phuoc Ward, Thu Duc, Ho Chi Minh City, Vietnam]]></description>
        <address><![CDATA[69A Hiep Binh Street, Hiep Binh Phuoc Ward, Thu Duc, Ho Chi Minh City, Vietnam]]></address>
        <phoneNumber><![CDATA[+84 399 919 698]]></phoneNumber>
        <atom:link href="https://oganivn.com"/>
      </Placemark>
    </Folder>
  </Document>
</kml>`;

	return new Response(kml, {
		status: 200,
		headers: {
			"Content-Type": "application/vnd.google-earth.kml+xml; charset=utf-8",
			"Cache-Control": "public, max-age=3600",
		},
	});
};
